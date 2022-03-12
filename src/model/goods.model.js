const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
const Goods = seq.define(
  'mobilePhone_goods',
  {
    goods_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '商品名',
    },
    goods_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      commit: '商品价格',
    },
    goods_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      commit: '商品数量',
    },
    goods_img: {
      type: DataTypes.STRING,
      allowNull: false,
      commit: '商品图片',
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    updatedAt: false,
    createdAt: 'createGoodsTime',
  }
)

// Goods.sync({ alter: true })

module.exports = Goods
