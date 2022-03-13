const Router = require('koa-router')
const cart = new Router()
const { auth } = require('../middleware/auth.middleware')
const { validatorCart } = require('../middleware/cart.middleware')
const {
  addCart,
  getCart,
  updateCart,
  deleteCart,
  selectAllCart,
} = require('../controller/cart.controller')

// 加入购物车
cart.post('/addcart', auth, validatorCart({ goods_id: 'number' }), addCart)

// 获取购物车列表
cart.get('/', auth, getCart)
// 更新购物车
cart.patch(
  '/:id',
  auth,
  validatorCart({
    number: { type: 'number', required: false },
    selected: { type: 'boolean', required: false },
  }),
  updateCart
)
// 删除购物车
cart.delete('/', auth, validatorCart({ ids: 'array' }), deleteCart)
// 全选
cart.post('/selectAll', auth, selectAllCart(true))
// 全不选
cart.post('/unselectAll', auth, selectAllCart(false))

module.exports = cart
