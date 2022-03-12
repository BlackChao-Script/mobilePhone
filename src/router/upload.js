const Router = require('koa-router')
const upload = new Router()
const { auth, hadAdminPermission } = require('../middleware/auth.middleware')
const { uploads } = require('../controller/upload.controller')

// 上传
upload.post('/', auth, hadAdminPermission, uploads)

module.exports = upload
