const Carousel = require('../model/carousel.model')
const { BASE_PATH } = require('../constant/data')

class CarouselService {
  // 创建轮播图
  async createServiceCarousel(carouselData) {
    const res = await Carousel.create(carouselData)
    return res.dataValues
  }
  // 修改轮播图
  async modifyServiceCarousel(id, carouselData) {
    const res = await Carousel.update(carouselData, { where: { id } })
    return res[0] > 0 ? true : false
  }
  // 删除轮播图
  async delServiceCarousel(id) {
    const res = await Carousel.destroy({ where: { id } })
    return res[0] > 0 ? true : false
  }
  // 获取轮播图
  async getServiceCarousel() {
    const res = await Carousel.findAll()
    res.forEach((element) => {
      element.dataValues.carousel_src =
        BASE_PATH + element.dataValues.carousel_src
    })
    return {
      list: res,
    }
  }
}

module.exports = new CarouselService()
