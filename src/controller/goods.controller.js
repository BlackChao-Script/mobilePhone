const {
  createServiceGoods,
  modifyServiceGoods,
  deleteServiceGoods,
} = require('../service/goods.service')
const {
  createGoodsError,
  modifyGoodslId,
  modifyGoodsError,
  deleteGoodsError,
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
  // 删除商品
  async deleteGoods(ctx) {
    try {
      await deleteServiceGoods(ctx.params.id)
      ctx.body = {
        code: 0,
        message: '删除商品数据成功',
        resukt: '',
      }
    } catch (err) {
      console.error('删除商品数据失败', err)
      return ctx.app.emit('error', deleteGoodsError, ctx)
    }
  }
}

module.exports = new GoodsController()
