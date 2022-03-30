const Goods = require('../model/goods.model')
const GoodsDet = require('../model/goodsDet.model')
const { BASE_PATH } = require('../constant/data')

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
  // 获取商品
  async getServiceGoods(pageNum, pageSize) {
    const count = await Goods.count()
    const offset = (pageNum - 1) * pageSize
    const rows = await Goods.findAll({ offset: offset, limit: pageSize * 1 })
    rows.forEach((element) => {
      element.dataValues.goods_img = BASE_PATH + element.dataValues.goods_img
    })
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    }
  }
  // 获取商品数量
  async getServiceGoodsNumber() {
    const res = await Goods.findAll()
    return {
      number: res.length,
    }
  }
  // 获取商品详细数据
  async getServiceGoodsData(goods_id) {
    const res = await GoodsDet.findOne({
      where: { goods_id },
      include: {
        model: Goods,
        as: 'goods_info',
        attributes: [
          'goods_name',
          'goods_price',
          'goods_num',
          'goods_img',
          'createGoodsTime',
        ],
      },
    })
    res.dataValues.goods_info.goods_img =
      BASE_PATH + res.dataValues.goods_info.goods_img
    return res.dataValues
  }
  // 创建商品详细数据
  async createServiceGoodsDet(data) {
    const res = await GoodsDet.create(data)
    return res.dataValues
  }
  // 更新商品详细数据
  async updateServiceGoodsDet(goods_id, data) {
    const res = await GoodsDet.update(data, { where: { goods_id } })
    return res[0] > 0 ? true : false
  }
}

module.exports = new GoodsService()
