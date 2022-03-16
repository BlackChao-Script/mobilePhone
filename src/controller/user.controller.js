const {
  createUser,
  getUerInfo,
  updateById,
  getServiceUserNum,
} = require('../service/user.service')
const { JWT_SECRET } = require('../constant/data')
const jwt = require('jsonwebtoken')
const {
  userLoginError,
  updatePassowrdError,
  getUserNumError,
} = require('../constant/err.type')
class UserController {
  // 注册
  async register(ctx) {
    const { user_name, password } = ctx.request.body
    const res = await createUser(user_name, password)
    ctx.body = {
      code: 0,
      message: '用户注册成功',
      result: {
        id: res.id,
        user_name: res.user_name,
      },
    }
  }
  // 登录
  async login(ctx) {
    const { user_name } = ctx.request.body
    try {
      const { password, ...res } = await getUerInfo({ user_name })
      ctx.body = {
        code: 0,
        message: '用户登录成功',
        result: {
          token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
        },
      }
    } catch (err) {
      console.error('用户登录失败', err)
      return ctx.app.emit('error', userLoginError, ctx)
    }
  }
  // 修改密码
  async changePassword(ctx) {
    const { id } = ctx.state.user
    const { password } = ctx.request.body
    try {
      await updateById({ id, password })
      ctx.body = {
        code: 0,
        message: '修改密码成功',
        result: '',
      }
    } catch (err) {
      console.error('修改密码失败', err)
      return ctx.app.emit('error', updatePassowrdError, ctx)
    }
  }
  // 获取用户数量
  async getUserNum(ctx) {
    try {
      const res = await getServiceUserNum()
      ctx.body = {
        code: 0,
        message: '',
        result: res,
      }
    } catch (err) {
      console.error('获取用户数量失败', err)
      return ctx.app.emit('error', getUserNumError, ctx)
    }
  }
}

module.exports = new UserController()
