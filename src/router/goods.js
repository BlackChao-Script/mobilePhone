const Router = require('koa-router')
const goods = new Router()
const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { validatorGoods } = require('../middleware/goods.middleware')
const {
  createGoods,
  modifyGoods,
  goodsoffGoods,
  goodsonGoods,
} = require('../controller/goods.controller')

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
// 商品下架
goods.post('/goodsoff/:id', auth, hadAdminPermission, goodsoffGoods)
// 商品上架
goods.post('/goodson/:id', auth, hadAdminPermission, goodsonGoods)

module.exports = goods
