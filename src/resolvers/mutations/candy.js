var candyModel = require('../../models/candy')

addCandy = async(parent,args) => {
    var newCandy = new candyModel({cid: "", name: "", tags: ['',''], links: ['','']});
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
    updateCandy = await candyModel.findById(args.id, function (err, doc){
        if(args.name != null){
        doc.name = args.name;
        }
        if(args.tags != null){
        doc.tags = args.tags;
        }
        if(args.links != null){
        doc.links = args.links;
        }
        doc.save();
    });
    return {
        name: updateCandy.name,
        tags: updateCandy.tags,
        links: updateCandy.links
    };
}

deleteCandy = async(parent,args) => {
    candyModel.deleteOne({ name: args.name}, function (err) {
        if (err) return handleError(err);
    });
    return "deleted";
}

module.exports = {
    addCandy: addCandy,
    updateCandy: updateCandy,
    deleteCandy: deleteCandy
}