var candyModel = require('../../models/candy')

findCandy = async(parent,args) => {
    findCandy = await candyModel.find({ name: args.cname })
    return findCandy;
}
    
findCandybyTag = async(parent,args) => {
    findCandy = await candyModel.find({ tags: args.tag })
    return findCandy;
}

module.exports = {
    findCandy: findCandy,
    findCandybyTag: findCandybyTag
}