const {
  createServiceGoods,
  modifyServiceGoods,
  goodsoffServiceGoods,
  goodsonServiceGoods,
  getServiceGoods,
  getServiceGoodsNumber,
} = require('../service/goods.service')
const {
  createGoodsError,
  modifyGoodslId,
  modifyGoodsError,
  goodsoffGoodsError,
  goodsonGoodsError,
  goodsListError,
  getGoodsNumberError,
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
  // 下架商品
  async goodsoffGoods(ctx) {
    try {
      const res = await goodsoffServiceGoods(ctx.params.id)
      if (res) {
        ctx.body = {
          code: 0,
          message: '下架商品数据成功',
          resukt: '',
        }
      } else {
        return ctx.app.emit('error', modifyGoodslId, ctx)
      }
    } catch (err) {
      console.error('下架商品数据失败', err)
      return ctx.app.emit('error', goodsoffGoodsError, ctx)
    }
  }
  // 上架商品
  async goodsonGoods(ctx) {
    const res = await goodsonServiceGoods(ctx.params.id)
    try {
      if (res) {
        ctx.body = {
          code: 0,
          message: '上架商品数据成功',
          resukt: '',
        }
      } else {
        return ctx.app.emit('error', modifyGoodslId, ctx)
      }
    } catch (err) {
      console.error('上架商品数据失败', err)
      return ctx.app.emit('error', goodsonGoodsError, ctx)
    }
  }
  // 获取商品列表
  async goodsList(ctx) {
    const { pageNum = 1, pageSize = 12 } = ctx.request.query
    try {
      const res = await getServiceGoods(pageNum, pageSize)
      ctx.body = {
        code: 0,
        message: '获取商品列表成功',
        result: res,
      }
    } catch (err) {
      console.error('获取商品列表失败', err)
      return ctx.app.emit('error', goodsListError, ctx)
    }
  }
  // 获取商品数量
  async getGoodsNumber(ctx) {
    try {
      const res = await getServiceGoodsNumber()
      ctx.body = {
        code: 0,
        message: '',
        result: res,
      }
    } catch (err) {
      console.error('获取商品数量失败', err)
      return ctx.app.emit('error', getGoodsNumberError, ctx)
    }
  }
}

module.exports = new GoodsController()
