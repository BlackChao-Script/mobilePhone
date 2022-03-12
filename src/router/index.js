const Router = require('koa-router')
const router = new Router()
const user = require('./user')
const upload = require('./upload')
const goods = require('./goods')

// 用户接口
router.use('/user', user.routes(), user.allowedMethods())
// 上传接口
router.use('/upload', upload.routes(), upload.allowedMethods())
// 商品接口
router.use('/goods', goods.routes(), goods.allowedMethods())

module.exports = router
