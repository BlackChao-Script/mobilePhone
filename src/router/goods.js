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
  getGoodsNumber,
  getGoods,
  createGoodsDet,
  updateGoodsDet,
} = require('../controller/goods.controller')

const goodsRules = {
  goods_name: { type: 'string', required: true },
  goods_price: { type: 'number', required: true },
  goods_num: { type: 'number', required: true },
  goods_img: { type: 'string', required: true },
  sort_id: { type: 'number', required: true },
}
const goodsDetRules = {
  goods_id: { type: 'number', required: true },
  title: { type: 'string', required: true },
  promise: { type: 'string', required: true },
  pay: { type: 'string', required: true },
  rule: { type: 'string', required: true },
}
// 创建商品
goods.post(
  '/creategoods',
  auth,
  hadAdminPermission,
  validatorGoods(goodsRules),
  createGoods
)
// 修改商品
goods.put(
  '/creategoods/:id',
  auth,
  hadAdminPermission,
  validatorGoods(goodsRules),
  modifyGoods
)
// 商品下架
goods.post('/goodsoff/:id', auth, hadAdminPermission, goodsoffGoods)
// 商品上架
goods.post('/goodson/:id', auth, hadAdminPermission, goodsonGoods)
// 获取商品列表
goods.get('/', goodsList)
// 获取商品总数
goods.get('/getnumber', getGoodsNumber)
// 获取商品详细数据
goods.get('/getgoodsDet', auth, getGoods)
// 添加商品详细数据
goods.post(
  '/creategoodsDet',
  auth,
  hadAdminPermission,
  validatorGoods(goodsDetRules),
  createGoodsDet
)
// 修改商品详细数据
goods.put('/updategoodsdet/:id', auth, hadAdminPermission, updateGoodsDet)

module.exports = goods
