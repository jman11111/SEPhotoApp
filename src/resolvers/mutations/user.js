var userModel = require('../../models/user')

var signUp = async(parent,args) => {
    var newUser = new userModel({ email: '', password: '',allergies: ['',''], favorites: []});
    newUser.uid = newUser._id;
    newUser.email = args.email;
    newUser.password = args.password; 
    await newUser.save();
    return {
        email: newUser.email
    }
}
  
var login = async(parent,args) => {
    let user = await userModel.findOne({ email: args.email });
    if (args.password != user.password){
        throw new Error('password does not match');
    } 
    await user.save();
    return {
        email: user.email,
        success: "Success"
    }; 
}

var updateUser = async(parent,args) => {
    updateUser = await userModel.findOne({ uid: args.id}, function (err, doc){
        doc.email = args.email;
        doc.password = args.password;
        doc.allergies = args.allergy;
        doc.favorites = args.favorites;
        doc.save();
    });
    return{
        user: updateUser
    }
}

deleteUser = async(parent,args) => {
    userModel.deleteOne({ uid: args.id}, function (err) {
        if (err) return handleError(err);
    });
    return "deleted";
}

module.exports = {
    signUp: signUp,
    login: login,
    updateUser: updateUser,
    deleteUser: deleteUser
}