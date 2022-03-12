const Router = require('koa-router')
const upload = new Router()
const { auth, hadAdminPermission } = require('../middleware/user.middleware')
const { uploads } = require('../controller/upload.controller')

upload.post('/', auth, hadAdminPermission, uploads)

module.exports = upload
