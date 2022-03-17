const {
  addServiceTodo,
  getServiceTodo,
  deleteServicetTodo,
  patchServiceodo
} = require('../service/todo.service')
const {
  addTodoError,
  getTodoError,
  deletetTodoError,
  patchTodoError
} = require('../constant/err.type')

class TodoController {
  // 添加todo
  async addTodo(ctx) {
    try {
      const res = await addServiceTodo(ctx.request.body)
      ctx.body = {
        code: 0,
        message: '添加todo成功',
        result: res,
      }
    } catch (err) {
      console.error('添加todo失败')
      return ctx.app.emit('error', addTodoError, ctx)
    }
  }
  // 获取todo列表
  async getTodo(ctx) {
    try {
      const res = await getServiceTodo()
      ctx.body = {
        code: 0,
        message: '',
        result: res,
      }
    } catch (err) {
      console.error('获取todo列表失败', err)
      return ctx.app.emit('error', getTodoError, ctx)
    }
  }
  // 删除todo
  async deletetTodo(ctx) {
    try {
      await deleteServicetTodo(ctx.params.id)
      ctx.body = {
        code: 0,
        message: '删除todo成功',
        result: '',
      }
    } catch (err) {
      console.error('删除todo失败', err)
      return ctx.app.emit('error', deletetTodoError, ctx)
    }
  }
  // 更新todo选中状态
  patchTodo = (check) => {
    return async (ctx) => {
      let message = ''
      check == 1 ? message= '选中' : message = '取消选中'
      try{
        const res = await patchServiceodo(ctx.params.id, check)
        ctx.body = {
          code:0,
          message:`${message}成功`,
          result: res
        }
      }catch(err){
        console.error(`${message}失败`,err)
        patchTodoError.message = `${message}失败`
        return ctx.app.emit('error', patchTodoError , ctx)
      }
    }
  }
}

module.exports = new TodoController()
