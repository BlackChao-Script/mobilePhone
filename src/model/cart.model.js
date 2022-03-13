const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
const Cart = seq.define(
  'mobilePhone_cart',
  {
    goods_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '商品id',
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '用户id',
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '数量',
    },
    selected: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment:'是否选中'
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

// Cart.sync({ alter: true })

module.exports = Cart
