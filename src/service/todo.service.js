const Todo = require('../model/todo.model')

class TodoService {
  // 添加todo
  async addServiceTodo(todoData) {
    const res = await Todo.create(todoData)
    return res.dataValues
  }
  // 获取todo
  async getServiceTodo() {
    return await Todo.findAll()
  }
  // 删除todo
  async deleteServicetTodo(id) {
    const res = await Todo.destroy({ where: { id } })
    return res[0] > 0 ? true : false
  }
  // 改变选中状态
  async patchServiceodo(id, check) {
    console.log(check)
    return await Todo.update(
      { check },
      {
        where: {
          id,
        },
      }
    )
  }
}

module.exports = new TodoService()
