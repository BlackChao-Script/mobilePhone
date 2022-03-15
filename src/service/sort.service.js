const Sort = require('../model/sort.model')
const Goods = require('../model/goods.model')

class SortService {
  // 添加分类
  async addServiceSort(data) {
    const res = await Sort.create(data)
    return res.dataValues
  }
  // 修改分类
  async modifyServiceSort(id, data) {
    const res = await Sort.update(data, { where: { id } })
    return res[0] > 0 ? true : false
  }
  // 删除分类
  async deleteServiceSort(id) {
    const res = await Sort.destroy({ where: { id } })
    return res[0] > 0 ? true : false
  }
  // 获取分类列表
  async getServiceSort() {
    return await Sort.findAll()
  }
  // 获取分类详细数据
  async getSortServiceData(sort_id) {
    return await Goods.findAll({ where: { sort_id } })
  }
}

module.exports = new SortService()
