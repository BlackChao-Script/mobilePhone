const Router = require('koa-router')
const order = new Router()
const { auth } = require('../middleware/auth.middleware')
const { validatorOrder } = require('../middleware/order.middleware')
const { createOrder } = require('../controller/order.controller')

// 提交订单
order.post(
  '/',
  auth,
  validatorOrder({
    address_id: 'int',
    goods_info: 'string',
    total: 'string',
  }),
  createOrder
)

module.exports = order
