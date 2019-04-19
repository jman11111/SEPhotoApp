var candyModel = require('../../models/candy')

findCandy = async(parent,args) => {
    findCandy = await candyModel.find({ "name": { "$regex": args.cname, "$options": "i" } });
    return findCandy;
}
    
findCandybyTag = async(parent,args) => {
    findCandy = await candyModel.find({ "tags": { "$regex": args.tag, "$options": "i" } });
    return findCandy;
}

module.exports = {
    findCandy: findCandy,
    findCandybyTag: findCandybyTag
}