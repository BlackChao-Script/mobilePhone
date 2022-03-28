const Router = require('koa-router')
const user = new Router()
const {
  register,
  login,
  changePassword,
  getUserNum,
  getUserInfo,
} = require('../controller/user.controller')
const {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
} = require('../middleware/user.middleware')
const { auth } = require('../middleware/auth.middleware')

// 注册
user.post('/register', userValidator, verifyUser, crpytPassword, register)
// 登录
user.post('/login', userValidator, verifyLogin, login)
// 修改密码
user.patch('/modify', auth, crpytPassword, changePassword)
// 获取用户数量
user.get('/', getUserNum)
// 获取用户信息
user.get('/userinfo', auth, getUserInfo)

module.exports = user
