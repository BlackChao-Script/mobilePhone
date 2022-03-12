const {
  createServiceGoods,
  modifyServiceGoods,
} = require('../service/goods.service')
const {
  createGoodsError,
  modifyGoodslId,
  modifyGoodsError,
} = require('../constant/err.type')

class GoodsController {
  // 创建商品数据
  async createGoods(ctx) {
    try {
      const res = await createServiceGoods(ctx.request.body)
      ctx.body = {
        code: 0,
        message: '创建商品数据成功',
        result: res,
      }
    } catch (err) {
      console.error('创建商品数据失败', err)
      return ctx.app.emit('error', createGoodsError, ctx)
    }
  }
  // 修改商品数据
  async modifyGoods(ctx) {
    try {
      const res = await modifyServiceGoods(ctx.params.id, ctx.request.body)
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改商品数据成功',
          result: '',
        }
      } else {
        return ctx.app.emit('error', modifyGoodslId, ctx)
      }
    } catch (err) {
      console.error('修改商品失败', err)
      return ctx.app.emit('error', modifyGoodsError, ctx)
    }
  }
}

module.exports = new GoodsController()
