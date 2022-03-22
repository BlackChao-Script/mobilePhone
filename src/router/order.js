const Router = require('koa-router')
const order = new Router()
const { auth } = require('../middleware/auth.middleware')
const { validatorOrder } = require('../middleware/order.middleware')
const {
  createOrder,
  getOrder,
  updateOrder,
  getOrderNum,
} = require('../controller/order.controller')

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
// 获取订单列表
order.get('/', auth, getOrder)
// 更新订单状态
order.patch(
  '/:id',
  auth,
  validatorOrder({
    state: 'int',
  }),
  updateOrder
)
// 获取订单数量
order.get('/ordernum', getOrderNum)

module.exports = order
