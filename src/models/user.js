var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var candySchema = new Schema({
    name: String,
    tags: [String],
    links: [String]
});

var userSchema = new Schema({
    email: String,
    password: String,
    allergies: [String],
    favorites: [candySchema]
});
  
var userModel = mongoose.model('userModel', userSchema);
  
module.exports = userModel;