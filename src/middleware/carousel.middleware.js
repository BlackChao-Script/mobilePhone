const { validatorCarouselError } = require('../constant/err.type')

// 校验轮播图数据
const validatorCarousel = async (ctx, next) => {
  try {
    ctx.verifyParams({
      carousel_name: { type: 'string', required: true },
      carousel_src: { type: 'string', required: true },
    })
  } catch (err) {
    console.error('轮播图参数格式错误', err)
    validatorCarouselError.result = err
    return ctx.app.emit('error', validatorCarouselError, ctx)
  }
  await next()
}

module.exports = {
  validatorCarousel,
}
