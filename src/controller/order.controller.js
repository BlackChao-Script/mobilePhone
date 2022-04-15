const {
  createServiceOrder,
  getUserServiceOrder,
  getServiceOrder,
  updateServiceOrder,
  getServiceOrderNum,
} = require('../service/order.service')
const {
  createOrderError,
  getOrderError,
  updateOrderError,
  getOrderNumError,
} = require('../constant/err.type')

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
  // 获取订单列表(用户)
  async getUserOrder(ctx) {
    const user_id = ctx.state.user.id
    const { pageNum = 1, pageSize = 12 } = ctx.request.query
    try {
      const res = await getUserServiceOrder(pageNum, pageSize, user_id)
      ctx.body = {
        code: 0,
        message: '',
        result: res,
      }
    } catch (err) {
      console.error('获取订单列表失败', err)
      return ctx.app.emit('error', getOrderError, ctx)
    }
  }
  // 获取订单列表(管理员后台)
  async getOrder(ctx) {
    const { pageNum = 1, pageSize = 6 } = ctx.request.query
    try {
      const res = await getServiceOrder(pageNum, pageSize)
      ctx.body = {
        code: 0,
        message: '',
        result: res,
      }
    } catch (err) {
      console.error('获取订单列表失败', err)
      return ctx.app.emit('error', getOrderError, ctx)
    }
  }
  // 更新订单状态
  async updateOrder(ctx) {
    const { id } = ctx.request.params
    const { state } = ctx.request.body
    try {
      const res = await updateServiceOrder(id, state)
      ctx.body = {
        code: 0,
        message: '更新订单状态成功',
        result: res,
      }
    } catch (err) {
      console.error('更新订单状态失败', err)
      return ctx.app.emit('error', updateOrderError, ctx)
    }
  }
  // 获取订单数量
  async getOrderNum(ctx) {
    try {
      const res = await getServiceOrderNum()
      ctx.body = {
        code: 0,
        message: '',
        result: res,
      }
    } catch (err) {
      console.error('获取订单数量失败', err)
      return ctx.app.emit('error', getOrderNumError, ctx)
    }
  }
}

module.exports = new OrderController()
