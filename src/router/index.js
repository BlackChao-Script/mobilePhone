const Router = require('koa-router')
const router = new Router()
const user = require('./user')
const upload = require('./upload')
const goods = require('./goods')
const carousel = require('./carousel')
const cart = require('./cart')
const address = require('./address')

// 用户接口
router.use('/user', user.routes(), user.allowedMethods())
// 上传接口
router.use('/upload', upload.routes(), upload.allowedMethods())
// 商品接口
router.use('/goods', goods.routes(), goods.allowedMethods())
// 轮播图接口
router.use('/carousel', carousel.routes(), carousel.allowedMethods())
// 购物车接口
router.use('/cart', cart.routes(), cart.allowedMethods())
// 地址接口
router.use('/address', address.routes(), address.allowedMethods())

module.exports = router
