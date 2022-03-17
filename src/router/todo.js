const Router = require('koa-router')
const { auth } = require('../middleware/auth.middleware')
const { validatorTodo } = require('../middleware/todo.middleware')
const {
  addTodo,
  getTodo,
  deletetTodo,
  patchTodo,
} = require('../controller/todo.controller')

const todo = new Router()

// 添加todo
todo.post(
  '/addtodo',
  auth,
  validatorTodo({ text: { type: 'string', required: true } }),
  addTodo
)
// 获取todo列表
todo.get('/', auth, getTodo)
// 删除todo
todo.delete('/:id', auth, deletetTodo)
// 更新选中状态
todo.post('/check/:id', auth, patchTodo(1))
todo.post('/uncheck/:id', auth, patchTodo(0))

module.exports = todo
