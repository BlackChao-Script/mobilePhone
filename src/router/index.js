const Router = require('koa-router')
const router = new Router()
const user = require('./user')
const upload = require('./upload')
const goods = require('./goods')
const carousel = require('./carousel')

// 用户接口
router.use('/user', user.routes(), user.allowedMethods())
// 上传接口
router.use('/upload', upload.routes(), upload.allowedMethods())
// 商品接口
router.use('/goods', goods.routes(), goods.allowedMethods())
// 轮播图接口
router.use('/carousel', carousel.routes(), carousel.allowedMethods())

module.exports = router
