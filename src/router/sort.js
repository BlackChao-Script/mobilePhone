const Router = require('koa-router')
const sort = new Router()
const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { validatorSort } = require('../middleware/sort.middleware')
const { addSort } = require('../controller/sort.controller')

// 添加分类
sort.post('/addsort', auth, hadAdminPermission, validatorSort, addSort)
// 修改分类

//删除分类

// 获取分类列表

module.exports = sort
