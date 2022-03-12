const Router = require('koa-router')
const router = new Router()
const user = require('./user')
const upload = require('./upload')
const goods = require('./goods')

router.use('/user', user.routes(), user.allowedMethods())
router.use('/upload', upload.routes(), upload.allowedMethods())
router.use('/goods', goods.routes(), goods.allowedMethods())

module.exports = router
