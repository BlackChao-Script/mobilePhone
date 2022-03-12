const Router = require('koa-router')
const goods = new Router()
const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { validatorGoods } = require('../middleware/goods.middleware')
const {
  createGoods,
  modifyGoods,
  goodsoffGoods,
  goodsonGoods,
  goodsList,
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
// 获取商品列表
goods.get('/', goodsList)

module.exports = goods
