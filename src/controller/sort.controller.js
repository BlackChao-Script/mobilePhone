const {
  addServiceSort,
  modifyServiceSort,
  deleteServiceSort,
  getServiceSort,
  getSortServiceData,
} = require('../service/sort.service')
const {
  addSortError,
  modifySortError,
  deleteSortError,
  getSortError,
  getSortDataError,
} = require('../constant/err.type')
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
  // 修改分类
  async modifySort(ctx) {
    try {
      await modifyServiceSort(ctx.params.id, ctx.request.body)
      ctx.body = {
        code: 0,
        message: '修改分类成功',
        result: '',
      }
    } catch (err) {
      console.error('修改分类失败', err)
      return ctx.app.emit('error', modifySortError, ctx)
    }
  }
  // 删除分类
  async deleteSort(ctx) {
    try {
      await deleteServiceSort(ctx.params.id)
      ctx.body = {
        code: 0,
        message: '删除分类成功',
        result: '',
      }
    } catch (err) {
      console.error('删除分类失败', err)
      return ctx.app.emit('error', deleteSortError, ctx)
    }
  }
  // 获取分类数据列表
  async getSort(ctx) {
    try {
      const res = await getServiceSort()
      ctx.body = {
        code: 0,
        message: '获取分类数据列表',
        result: res,
      }
    } catch (err) {
      console.error('获取分类数据列表失败', err)
      return ctx.app.emit('error', getSortError, ctx)
    }
  }
  // 获取分类详细数据
  async getSortData(ctx) {
    const sort_id = ctx.request.query.id
    try {
      const res = await getSortServiceData(sort_id)
      ctx.body = {
        code: 0,
        message: '获取分类详细数据',
        result: res,
      }
    } catch (err) {
      console.error('获取分类详细数据', err)
      return ctx.app.emit('error', getSortDataError, ctx)
    }
  }
}

module.exports = new SortController()
