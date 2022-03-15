const { addServiceSort } = require('../service/sort.service')

class SortController {
  // 添加分类
  async addSort(ctx) {
    try {
      const res = await addServiceSort(ctx.request.body)
      ctx.body = {
        code: 0,
        message: '添加分类成功',
        result: res,
      }
    } catch (err) {
      console.error('添加分类失败', err)
      return ctx.app.emit('error', addSortError, ctx)
    }
  }
}

module.exports = new SortController()
