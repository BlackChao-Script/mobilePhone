const Order = require('../model/order.model')

class OrderService {
  // 生成订单
  async createServiceOrder(order) {
    return await Order.create(order)
  }
}

module.exports = new OrderService()
