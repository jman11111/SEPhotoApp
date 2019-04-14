var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var candySchema = new Schema({
    name: { type : String , unique : true, required : true },
    tags: { type : [String], required : true },
    links: { type : [String], required : true }
});
  
var candyModel = mongoose.model('candyModel', candySchema);
  
module.exports = candyModel;