const Order = require('../model/order.model')
const Address = require('../model/address.model')

class OrderService {
  // 生成订单
  async createServiceOrder(order) {
    return await Order.create(order)
  }
  // 获取订单列表(用户)
  async getUserServiceOrder(pageNum, pageSize, user_id) {
    const offset = (pageNum - 1) * pageSize
    const { count, rows } = await Order.findAndCountAll({
      offset,
      limit: pageSize * 1,
      attributes: [
        'user_id',
        'id',
        'goods_info',
        'total',
        'order_number',
        'createdAT',
        'state',
      ],
      where: { user_id },
      include: {
        model: Address,
        as: 'address',
        attributes: ['address'],
      },
    })
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    }
  }
  // 获取订单列表(管理员后台)
  async getServiceOrder(pageNum, pageSize) {
    const offset = (pageNum - 1) * pageSize
    const { count, rows } = await Order.findAndCountAll({
      attributes: [
        'id',
        'goods_info',
        'total',
        'order_number',
        'address_id',
        'state',
      ],
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
