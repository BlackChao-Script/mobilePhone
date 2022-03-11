const Koa = require('koa2')
const Cors = require('koa2-cors')
const Static = require('koa-static')
const parameter = require('koa-parameter')
const KoaBody = require('koa-body')
const { join } = require('path')
const router = require('../router/index')
const errHandler = require('./errHandler')

const app = new Koa()

app.use(
  KoaBody({
    multipart: true,
    formidable: {
      uploadDir: join(__dirname, '../assets/uploads'),
      keepExtensions: true,
    },
  })
)
app.use(Static(join(__dirname, '../assets')))
app.use(Cors())
app.use(parameter(app))
app.use(router.routes(), router.allowedMethods())

app.on('error', errHandler)

module.exports = app
