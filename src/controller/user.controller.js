const { createUser, getUerInfo } = require('../service/user.service')
const { JWT_SECRET } = require('../constant/data')
const jwt = require('jsonwebtoken')
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
      console.log('用户登录失败', err)
    }
  }
}

module.exports = new UserController()
