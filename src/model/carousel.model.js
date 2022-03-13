const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
const Carousel = seq.define(
  'mobilePhone_carousel',
  {
    carousel_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '轮播图名称',
    },
    carousel_src: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '轮播图图片地址',
    },
    carousel_link: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '轮播图链接地址',
    },
  },
  { freezeTableName: true, timestamps: false, paranoid: true }
)

// Carousel.sync({ alter: true })

module.exports = Carousel
