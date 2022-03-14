const {
  addtoServiceAddress,
  getServiceAddress,
  modifyServiceAddress,
  deleteServiceAddress,
  isServiceDefault,
} = require('../service/address.service')
const {
  addtoaddressError,
  getAddressError,
  modifyAddressError,
  deleteAddressError,
  isDefaultError,
} = require('../constant/err.type')

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
  // 修改地址列表
  async modifyAddress(ctx) {
    const { id } = ctx.params
    const { consignee, phone, address } = ctx.request.body
    try {
      await modifyServiceAddress(id, {
        consignee,
        phone,
        address,
      })
      ctx.body = {
        code: 0,
        message: '修改地址列表成功',
        result: '',
      }
    } catch (err) {
      console.error('修改地址列表失败', err)
      return ctx.app.emit('error', modifyAddressError, ctx)
    }
  }
  // 删除地址
  async deleteAddress(ctx) {
    try {
      await deleteServiceAddress(ctx.params.id)
      ctx.body = {
        code: 0,
        message: '删除地址成功',
        result: '',
      }
    } catch (err) {
      console.error('删除地址失败', err)
      return ctx.app.emit('error', deleteAddressError, ctx)
    }
  }
  // 设为默认地址
  async isDefault(ctx) {
    const { id } = ctx.params
    const user_id = ctx.state.user.id
    try {
      await isServiceDefault(id, user_id)
      ctx.body = {
        code: 0,
        message: '设为默认地址成功',
        res: '',
      }
    } catch (err) {
      console.log('设为默认地址失败', err)
      return ctx.app.emit('error', isDefaultError, ctx)
    }
  }
}

module.exports = new AddressController()
