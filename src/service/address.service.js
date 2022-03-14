const Address = require('../model/address.model')

class AddressService {
  async addtoServiceAddress(params) {
    return await Address.create(params)
  }
}

module.exports = new AddressService()
