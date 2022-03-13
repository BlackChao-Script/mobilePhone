const Carousel = require('../model/carousel.model')

class CarouselService {
  async createServiceCarousel(carouselData) {
    const res = await Carousel.create(carouselData)
    return res.dataValues
  }
  async modifyServiceCarousel(id, carouselData) {
    const res = await Carousel.update(carouselData, { where: { id } })
    return res[0] > 0 ? true : false
  }
  async delServiceCarousel(id) {
    const res = await Carousel.destroy({ where: { id } })
    return res[0] > 0 ? true : false
  }
  async getServiceCarousel() {
    const res = await Carousel.findAll()
    return {
      list: res,
    }
  }
}

module.exports = new CarouselService()
