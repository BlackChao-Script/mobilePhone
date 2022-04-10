const Router = require('koa-router')
const address = new Router()
const { auth } = require('../middleware/auth.middleware')
const { validatorAddress } = require('../middleware/address.middleware')
const {
  addtoaddress,
  getAddress,
  getAddressAdmin,
  modifyAddress,
  deleteAddress,
  isDefault,
} = require('../controller/address.controller')

// 添加地址
address.post(
  '/addtoaddress',
  auth,
  validatorAddress({
    consignee: 'string',
    phone: { type: 'string', format: /^1[3456789]\d{9}$/ },
    address: 'string',
  }),
  addtoaddress
)
// 获取地址列表
address.get('/', auth, getAddress)
// 获取地址列表(管理员后台)
address.get('/admin', auth, getAddressAdmin)
// 修改地址
address.put(
  '/:id',
  auth,
  validatorAddress({
    consignee: 'string',
    phone: { type: 'string', format: /^1[3456789]\d{9}$/ },
    address: 'string',
  }),
  modifyAddress
)
// 删除地址
address.delete('/:id', auth, deleteAddress)
// 设为默认地址
address.patch('/:id', auth, isDefault)
// 设为默认地址(uniapp)
address.put('/def/:id', auth, isDefault)

module.exports = address
