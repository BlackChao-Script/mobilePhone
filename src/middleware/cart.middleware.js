const { validatorCartError } = require('../constant/err.type')
// 校验购物车数据
const validatorCart = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error(err)
      validatorCartError.result = err
      return ctx.app.emit('error', validatorCartError, ctx)
    }
    await next()
  }
}

module.exports = {
  validatorCart,
}
