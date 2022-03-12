const Router = require('koa-router')
const router = new Router()
const user = require('./user')
const upload = require('./upload')

router.use('/user', user.routes(), user.allowedMethods())
router.use('/upload', upload.routes(), upload.routes())

module.exports = router
