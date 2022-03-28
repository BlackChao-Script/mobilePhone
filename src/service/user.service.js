const User = require('../model/user.model')

class UserService {
  // 创建用户
  async createUser(user_name, password) {
    const res = await User.create({
      user_name,
      password,
    })
    return res.dataValues
  }
  // 查找用户
  async getUerInfo({ ...arg }) {
    const whereOpt = { ...arg }
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt,
    })
    return res ? res.dataValues : null
  }
  // 查找用户修改密码
  async updateById({ id, ...arg }) {
    const whereOpt = { id }
    const newUser = { ...arg }
    const res = await User.update(newUser, { where: whereOpt })
    return res[0] > 0 ? true : false
  }
  // 获取用户数量
  async getServiceUserNum() {
    const res = await User.findAll()
    return {
      number: res.length,
    }
  }
  // 获取用户信息
  async getServiceUserInfo(id) {
    return await User.findOne({ where: { id } })
  }
}

module.exports = new UserService()
