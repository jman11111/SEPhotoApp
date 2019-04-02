var candyModel = require('../../models/candy')

addCandy = async(parent,args) => {
    var newCandy = new candyModel({name: "", tags: ['',''], links: ['','']});
    newCandy.cid = newCandy._id;
    newCandy.name = args.name;
    newCandy.tags = args.tags; 
    newCandy.links = args.links;
    await newCandy.save();
    return {
        cid: newCandy.cid,
        name: newCandy.name,
        tags: newCandy.tags,
        links: newCandy.links
    };
}

updateCandy = async(parent,args) => {
    updateCandy = await candyModel.findOne({ cid: args.id}, function (err, doc){
        doc.name = args.name;
        doc.tags = args.tags;
        doc.links = args.links;
        doc.save();
    });
    return {
        name: updateCandy.name,
        tags: updateCandy.tags,
        links: updateCandy.links
    };
}

deleteCandy = async(parent,args) => {
    candyModel.deleteOne({ cid: args.id}, function (err) {
        if (err) return handleError(err);
    });
    return "deleted";
}

module.exports = {
    addCandy: addCandy,
    updateCandy: updateCandy,
    deleteCandy: deleteCandy
}