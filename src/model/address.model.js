const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
const Address = seq.define(
  'mobilePhone_address',
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '用户id',
    },
    consignee: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '收货人',
    },
    phone: {
      type: DataTypes.CHAR(11),
      allowNull: false,
      comment: '手机号',
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '收货地址',
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: '是否为默认地址,0:不是(默认值),1:是',
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

// Address.sync({ alter: true })

module.exports = Address
