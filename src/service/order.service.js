const Order = require('../model/order.model')

class OrderService {
  // 生成订单
  async createServiceOrder(order) {
    return await Order.create(order)
  }
  // 获取订单列表
  async getServiceOrder(pageNum, pageSize, state) {
    const offset = (pageNum - 1) * pageSize
    const { count, rows } = await Order.findAndCountAll({
      attributes: ['goods_info', 'total', 'order_number', 'state'],
      where: {
        state,
      },
      offset,
      limit: pageSize * 1,
    })
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    }
  }
  // 更新订单状态
  async updateServiceOrder(id, state) {
    return await Order.update({ state }, { where: { id } })
  }
  // 获取订单数量
  async getServiceOrderNum() {
    const res = await Order.findAll()
    return {
      number: res.length,
    }
  }
}

module.exports = new OrderService()
