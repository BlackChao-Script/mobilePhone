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
  // 获取地址(管理员后台)
  async getServiceAddressAdmin() {
    return await Address.findAll()
  }
  // 修改地址
  async modifyServiceAddress(id, params) {
    const res = await Address.update(params, { where: { id } })
    return res[0] > 0 ? true : false
  }
  // 删除地址
  async deleteServiceAddress(id) {
    const res = await Address.destroy({ where: { id } })
    return res[0] > 0 ? true : false
  }
  // 设为默认地址
  async isServiceDefault(id, user_id) {
    await Address.update(
      { is_default: false },
      {
        where: {
          user_id,
        },
      }
    )
    return await Address.update(
      { is_default: true },
      {
        where: {
          id,
        },
      }
    )
  }
}

module.exports = new AddressService()
