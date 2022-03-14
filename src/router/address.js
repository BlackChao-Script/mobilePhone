const Router = require('koa-router')
const address = new Router()
const { auth } = require('../middleware/auth.middleware')
const { validatorAddress } = require('../middleware/address.middleware')
const { addtoaddress } = require('../controller/address.controller')

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

// 修改地址

// 删除地址

// 设为默认地址

module.exports = address
