const { createServiceOrder } = require('../service/order.service')
const { createOrderError } = require('../constant/err.type')

class OrderController {
  // 生成订单
  async createOrder(ctx) {
    const user_id = ctx.state.user.id
    const { address_id, goods_info, total } = ctx.request.body
    const order_number = 'DT' + Date.now()
    try {
      const res = await createServiceOrder({
        user_id,
        address_id,
        goods_info,
        total,
        order_number,
      })
      ctx.body = {
        code: 0,
        message: '生成订单成功',
        resutl: res,
      }
    } catch (err) {
      console.error('生成订单失败', err)
      return ctx.app.emit('error', createOrderError, ctx)
    }
  }
}

module.exports = new OrderController()
