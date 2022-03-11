const User = require('../model/user.model')
class UserService {
  async createUser(user_name, password) {
    const res = await User.create({
      user_name,
      password,
    })
    return res.dataValues
  }
  async getUerInfo({ ...arg }) {
    const whereOpt = { ...arg }
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt,
    })
    return res ? res.dataValues : null
  }
}

module.exports = new UserService()
