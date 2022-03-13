const { validatorCartError } = require('../constant/err.type')
// 校验购物车数据
const validatorCart = async (ctx, next) => {
  try {
    ctx.verifyParams({
      goods_id: 'number',
    })
  } catch (err) {
    console.error(err)
    validatorCartError.result = err
    return ctx.app.emit('error', validatorCartError, ctx)
  }
  await next()
}

module.exports = {
  validatorCart,
}
