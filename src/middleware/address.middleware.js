const { validatorAddressError } = require('../constant/err.type')
// 校验地址数据
const validatorAddress = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error('校验格式错误', err)
      validatorAddressError.result = err
      return ctx.app.emit('error', validatorAddressError, ctx)
    }
    await next()
  }
}

module.exports = {
  validatorAddress,
}
