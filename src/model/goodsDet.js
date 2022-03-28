const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
const Goods = require('./goods.model')
const GoodsDet = seq.define(
  'mobilePhone_goodsdet',
  {
    goods_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '商品id',
    },
    title: {
      type: DataTypes.STRING,
      allowNull: '商品详细标题',
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

// GoodsDet.sync({ alter: true })

GoodsDet.belongsTo(Goods, {
  foreignKey: 'goods_id',
  as: 'goods_info',
})

module.exports = GoodsDet
