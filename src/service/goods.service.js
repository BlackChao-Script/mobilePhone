const Goods = require('../model/goods.model')

class GoodsService {
  // 创建商品
  async createServiceGoods(goodsData) {
    const res = await Goods.create(goodsData)
    return res.dataValues
  }
  // 修改商品
  async modifyServiceGoods(id, goodsData) {
    const res = await Goods.update(goodsData, { where: { id } })
    return res[0] > 0 ? true : false
  }
  // 下架商品
  async goodsoffServiceGoods(id) {
    const res = await Goods.destroy({ where: { id } })
    return res > 0 ? true : false
  }
  // 上架商品
  async goodsonServiceGoods(id) {
    const res = await Goods.restore({ where: { id } })
    return res > 0 ? true : false
  }
}

module.exports = new GoodsService()
