const { validatorTodoError } = require('../constant/err.type')

const validatorTodo = (type) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(type)
    } catch (err) {
      console.error('todo数据参数错误', err)
      return ctx.app.emit('error', validatorTodoError, ctx)
    }
    await next()
  }
}

module.exports = {
  validatorTodo,
}
