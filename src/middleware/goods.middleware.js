const { validatorGoodsError } = require('../constant/err.type')
// 校验商品数据
const validatorGoods = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error(err)
      validatorGoodsError.result = err
      return ctx.app.emit('error', validatorGoodsError, ctx)
    }
    await next()
  }
}

module.exports = {
  validatorGoods,
}
