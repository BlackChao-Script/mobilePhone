const Router = require('koa-router')
const sort = new Router()
const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { validatorSort } = require('../middleware/sort.middleware')
const {
  addSort,
  modifySort,
  deleteSort,
  getSort,
  getSortData,
} = require('../controller/sort.controller')

// 添加分类
sort.post('/addsort', auth, hadAdminPermission, validatorSort, addSort)
// 修改分类
sort.put('/:id', auth, hadAdminPermission, validatorSort, modifySort)
//删除分类
sort.delete('/:id', auth, hadAdminPermission, deleteSort)
// 获取分类列表
sort.get('/getsort', getSort)
// 获取分类详细列表
sort.get('/getsortdata', getSortData)

module.exports = sort
