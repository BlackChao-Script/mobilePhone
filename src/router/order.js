const Router = require('koa-router')
const order = new Router()
const { auth } = require('../middleware/auth.middleware')
const { validatorOrder } = require('../middleware/order.middleware')
const {
  createOrder,
  getUserOrder,
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
// 获取订单列表(用户)
order.get('/user', auth, getUserOrder)
// 获取订单列表(管理员后台)
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
// 更新订单状态(uniapp)
order.put(
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
