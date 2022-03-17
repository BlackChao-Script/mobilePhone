const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
const Todo = seq.define(
  'mobilePhone_todo',
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'todo名称',
    },
    check: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: '是否选中,,0:不是(默认值),1:是',
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

// Todo.sync({ force: true })

module.exports = Todo
