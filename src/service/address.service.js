const Address = require('../model/address.model')

class AddressService {
  // 添加地址
  async addtoServiceAddress(params) {
    return await Address.create(params)
  }
  // 获取地址
  async getServiceAddress(user_id) {
    return await Address.findAll({
      attributes: ['id', 'consignee', 'phone', 'address', 'is_default'],
      where: { user_id },
    })
  }
}

module.exports = new AddressService()
