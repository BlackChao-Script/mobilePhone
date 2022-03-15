const { validatorSortError } = require('../constant/err.type')

const validatorSort = async (ctx, next) => {
  try {
    ctx.verifyParams({
      sort_name: { type: 'string', required: true },
    })
  } catch (err) {
    console.error('分类数据参数错误', err)
    return ctx.app.emit('error', validatorSortError, ctx)
  }
  await next()
}

module.exports = {
  validatorSort,
}
