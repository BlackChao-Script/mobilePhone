const { validatorOrderError } = require('../constant/err.type')
// 校验订单数据
const validatorOrder = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error('校验订单格式错误', err)
      validatorOrderError.resule = err
      return ctx.app.emit('error', validatorOrderError, ctx)
    }
    await next()
  }
}

module.exports = {
  validatorOrder,
}
