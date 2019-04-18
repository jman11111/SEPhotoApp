var userModel = require('../../models/user')

findUser = async(parent,args) => {
    findUser = await userModel.findOne({ email: args.username })
    return findUser;
}

module.exports = {
    findUser: findUser
}