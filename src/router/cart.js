const Router = require('koa-router')
const cart = new Router()
const { auth } = require('../middleware/auth.middleware')
const { validatorCart } = require('../middleware/cart.middleware')
const { addCart } = require('../controller/cart.controller')

// 加入购物车
cart.post('/addcart', auth, validatorCart, addCart)

module.exports = cart
