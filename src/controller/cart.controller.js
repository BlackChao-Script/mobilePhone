const { addServiceCart } = require('../service/cart.service')

class CartController {
  async addCart(ctx) {
    const { id } = ctx.state.user
    const { goods_id } = ctx.request.body
    const res = await addServiceCart(id, goods_id)
    ctx.body = {
      code: 0,
      message: '添加购物车成功',
      result: res,
    }
  }
}

module.exports = new CartController()
