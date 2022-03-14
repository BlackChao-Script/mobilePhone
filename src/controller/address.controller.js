const {
  addtoServiceAddress,
  getServiceAddress,
} = require('../service/address.service')
const { addtoaddressError, getAddressError } = require('../constant/err.type')

class AddressController {
  // 添加地址
  async addtoaddress(ctx) {
    const user_id = ctx.state.user.id
    const { consignee, phone, address } = ctx.request.body
    try {
      const res = await addtoServiceAddress({
        user_id,
        consignee,
        phone,
        address,
      })
      ctx.body = {
        code: 0,
        message: '添加地址成功',
        result: res,
      }
    } catch (err) {
      console.error('添加地址失败', err)
      return ctx.app.emit('error', addtoaddressError, ctx)
    }
  }
  // 获取地址列表
  async getAddress(ctx) {
    const user_id = ctx.state.user.id
    try {
      const res = await getServiceAddress(user_id)
      ctx.body = {
        code: 0,
        message: '获取地址列表成功',
        result: res,
      }
    } catch (err) {
      console.error('获取地址列表失败', err)
      return ctx.app.emit('error', getAddressError, ctx)
    }
  }
}

module.exports = new AddressController()
