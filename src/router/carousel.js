const Router = require('koa-router')
const carousel = new Router()
const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { validatorCarousel } = require('../middleware/carousel.middleware')
const {
  createcarousel,
  modifyCarousel,
  delCarouse,
  getCarousel,
} = require('../controller/carousel.controller')

// 创建轮播图
carousel.post(
  '/create',
  auth,
  hadAdminPermission,
  validatorCarousel,
  createcarousel
)
// 修改轮播图
carousel.put(
  '/create/:id',
  auth,
  hadAdminPermission,
  validatorCarousel,
  modifyCarousel
)
// 删除轮播图
carousel.delete('/delcarouse/:id', auth, hadAdminPermission, delCarouse)
// 获取轮播图
carousel.get('/', getCarousel)

module.exports = carousel
