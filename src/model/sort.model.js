const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
const Sort = seq.define(
  'mobilePhone_sort',
  {
    sort_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '分类名称',
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

// Sort.sync({ force: true })

module.exports = Sort
