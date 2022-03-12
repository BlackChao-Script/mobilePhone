const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../constant/data')
const {
  TokenExpiredError,
  invalidToken,
  hadAdminPermissionError,
} = require('../constant/err.type')

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
  auth,
  hadAdminPermission,
}
