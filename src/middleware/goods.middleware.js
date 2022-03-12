const { validatorGoodsError } = require('../constant/err.type')
// 校验上传商品数据
const validatorGoods = async (ctx, next) => {
  try {
    ctx.verifyParams({
      goods_name: { type: 'string', required: true },
      goods_price: { type: 'number', required: true },
      goods_num: { type: 'number', required: true },
      goods_img: { type: 'string', required: true },
    })
  } catch (err) {
    console.err(err)
    validatorGoodsError.result = err
    return ctx.app.emit('error', validatorGoodsError, ctx)
  }
  await next()
}

module.exports = {
  validatorGoods,
}
