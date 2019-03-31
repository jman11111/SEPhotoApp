var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var candySchema = new Schema({
    name: String,
    tags: [String],
    links: [String]
});
  
var candyModel = mongoose.model('candyModel', candySchema);
  
module.exports = candyModel;