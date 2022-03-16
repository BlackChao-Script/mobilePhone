const {
  addServiceCart,
  getServiceCart,
  updateServiceCart,
  deleteServiceCart,
  selectServiceAllCarts,
} = require('../service/cart.service')
const {
  addCartError,
  getCartError,
  updateCartError,
  updateCartBodyUnd,
  deleteCartError,
  selectAllCartError,
} = require('../constant/err.type')

class CartController {
  // 添加购物车
  async addCart(ctx) {
    const { id } = ctx.state.user
    const { goods_id } = ctx.request.body
    try {
      const res = await addServiceCart(id, goods_id)
      ctx.body = {
        code: 0,
        message: '添加购物车成功',
        result: res,
      }
    } catch (err) {
      console.error('添加购物车失败', err)
      return ctx.app.emit('error', addCartError, ctx)
    }
  }
  // 获取购物车列表
  async getCart(ctx) {
    const user_id = ctx.state.user.id
    const { pageNum = 1, pageSize = 12 } = ctx.request.query
    try {
      const res = await getServiceCart(user_id,pageNum, pageSize)
      ctx.body = {
        code: 0,
        message: '获取购物车列表成功',
        result: res,
      }
    } catch (err) {
      console.error('获取购物车列表失败', err)
      return ctx.app.emit('error', getCartError, ctx)
    }
  }
  // 更新购物车
  async updateCart(ctx) {
    const { id } = ctx.request.params
    const { number, selected = false } = ctx.request.body
    try {
      if (number === undefined && selected === undefined) {
        console.error('number与selected不能同时为空')
        return ctx.app.emit('error', updateCartBodyUnd, ctx)
      }
      const res = await updateServiceCart(id, number, selected)
      ctx.body = {
        code: 0,
        message: '更新购物车成功',
        result: res,
      }
    } catch (err) {
      console.error('更新购物车失败', err)
      return ctx.app.emit('error', updateCartError, ctx)
    }
  }
  // 删除购物车
  async deleteCart(ctx) {
    const { ids } = ctx.request.body
    try {
      const res = await deleteServiceCart(ids)
      ctx.body = {
        code: 0,
        message: '删除购物车成功',
        result: res,
      }
    } catch (err) {
      console.error('删除购物车失败', err)
      return ctx.app.emit('error', deleteCartError, ctx)
    }
  }
  // 全选与取消全选
  selectAllCart = (selected) => {
    return async (ctx) => {
      const { id } = ctx.state.user
      let message = ''
      selected == true ? message = '全选' : message = '取消全选'
      try {
        const res = await selectServiceAllCarts(id, selected)
        ctx.body = {
          code: 0,
          message: `${message}成功`,
          result: res,
        }
      } catch (err) {
        console.error(`${message}失败`, err)
        selectAllCartError.message = `${message}失败`
        return ctx.add.emit('error', selectAllCartError, ctx)
      }
    }
  }
}

module.exports = new CartController()
