const {
  createServiceCarousel,
  modifyServiceCarousel,
  delServiceCarousel,
  getServiceCarousel,
} = require('../service/carousel.service')
const {
  createcarouselError,
  modifyCarouselError,
  modifyCarouselId,
  getCarouselError,
} = require('../constant/err.type')

class CarouselController {
  // 创建轮播图
  async createcarousel(ctx) {
    try {
      const res = await createServiceCarousel(ctx.request.body)
      ctx.body = {
        code: 0,
        messageL: '创建轮播图数据成功',
        result: res,
      }
    } catch (err) {
      console.error('创建轮播图数据失败', err)
      return ctx.app.emit('error', createcarouselError, ctx)
    }
  }
  // 修改轮播图
  async modifyCarousel(ctx) {
    try {
      const res = await modifyServiceCarousel(ctx.params.id, ctx.request.body)
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改轮播图数据成功',
          result: '',
        }
      } else {
        return ctx.app.emit('error', modifyCarouselId, ctx)
      }
    } catch (err) {
      console.error('修改轮播图数据失败', err)
      return ctx.app.emit('error', modifyCarouselError, ctx)
    }
  }
  // 删除轮播图
  async delCarouse(ctx) {
    try {
      await delServiceCarousel(ctx.params.id)
      ctx.body = {
        code: 0,
        message: '删除轮播图数据成功',
        resukt: '',
      }
    } catch (err) {
      console.error('删除轮播图数据失败', err)
      return ctx.app.emit('error', goodsoffGoodsError, ctx)
    }
  }
  // 获取轮播图
  async getCarousel(ctx) {
    try {
      const res = await getServiceCarousel()
      ctx.body = {
        code: 0,
        message: '',
        result: res,
      }
    } catch (err) {
      console.error('获取轮播图数据失败', err)
      return ctx.app.emit('error', getCarouselError, ctx)
    }
  }
}

module.exports = new CarouselController()
