const Sort = require('../model/sort.model')

class SortService {
  // 添加分类
  async addServiceSort(data) {
    const res = await Sort.create(data)
    return res.dataValues
  }
}

module.exports = new SortService()
