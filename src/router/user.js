const Router = require('koa-router')
const user = new Router()
const { register, login } = require('../controller/user.controller')
const {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
} = require('../middleware/user.middleware')

user.post('/register', userValidator, verifyUser, crpytPassword, register)
user.post('/login', userValidator, verifyLogin, login)

module.exports = user
