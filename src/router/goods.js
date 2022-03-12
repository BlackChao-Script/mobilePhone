const Router = require('koa-router')
const goods = new Router()
const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { validatorGoods } = require('../middleware/goods.middleware')
const { createGoods, modifyGoods } = require('../controller/goods.controller')

// 创建商品
goods.post(
  '/creategoods',
  auth,
  hadAdminPermission,
  validatorGoods,
  createGoods
)
// 修改商品
goods.put(
  '/creategoods/:id',
  auth,
  hadAdminPermission,
  validatorGoods,
  modifyGoods
)

module.exports = goods
