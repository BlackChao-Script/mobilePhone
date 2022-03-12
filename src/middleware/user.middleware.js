const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../constant/data')
const {
  userFormateError,
  userAlreadyExited,
  userRegisterError,
  userNotExistence,
  invalidPassword,
  userLoginError,
  TokenExpiredError,
  invalidToken,
  hadAdminPermissionError,
} = require('../constant/err.type')
const { getUerInfo } = require('../service/user.service')
// 处理用户名或密码为空中间件
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  if (!user_name || !password) {
    console.log('用户名或密码为空', ctx.request.body)
    ctx.app.emit('error', userFormateError, ctx)
    return
  }
  await next()
}
// 处理用户已经存在中间件
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body
  try {
    const res = await getUerInfo({ user_name })
    if (res) {
      console.log('用户名已经存在', { user_name })
      ctx.app.emit('error', userAlreadyExited, ctx)
    }
  } catch (err) {
    console.error('获取用户信息错误', err)
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }
  await next()
}
// 编辑加密中间件
const crpytPassword = async (ctx, next) => {
  const { password } = ctx.request.body
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  ctx.request.body.password = hash
  await next()
}
// 处理登录中间件
const verifyLogin = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  try {
    const res = await getUerInfo({ user_name })
    if (!res) {
      console.log('用户名不存在', { user_name })
      return ctx.app.emit('error', userNotExistence, ctx)
    }
    if (!bcrypt.compareSync(password, res.password)) {
      console.log('密码错误')
      return ctx.app.emit('error', invalidPassword, ctx)
    }
  } catch (err) {
    console.error(err)
    return ctx.app.emit('error', userLoginError, ctx)
  }
  await next()
}
// 用户认证中间件
const auth = async (ctx, next) => {
  const { authorization = '' } = ctx.request.header
  const token = authorization.replace('Bearer ', '')
  try {
    const user = jwt.verify(token, JWT_SECRET)
    ctx.state.user = user
  } catch (err) {
    switch (err.name) {
      case 'TokenExpiredError':
        console.error('token已过期', err)
        return ctx.app.emit('error', TokenExpiredError, ctx)
      case 'JsonWebTokenError':
        console.error('无效token', err)
        return ctx.app.emit('error', invalidToken, ctx)
    }
  }
  await next()
}
// 判断是否为管理员中间件
const hadAdminPermission = async (ctx, next) => {
  const { is_admin } = ctx.state.user
  if (!is_admin) {
    console.error('该用户没有管理员权限', ctx.state.user)
    return ctx.app.emit('error', hadAdminPermissionError, ctx)
  }
  await next()
}

module.exports = {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
  auth,
  hadAdminPermission,
}
