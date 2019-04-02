var addCandyfunc = require('./candy').addCandy
var updateCandyfunc = require('./candy').updateCandy
var deleteCandyfunc = require('./candy').deleteCandy

var signUpfunc = require('./user').signUp
var loginfunc = require('./user').login
var updateUserfunc = require('./user').updateUser
var deleteUserfunc = require('./user').deleteUser

module.exports =  {
    addCandy: addCandyfunc,
    updateCandy: updateCandyfunc,
    deleteCandy: deleteCandyfunc,
    signUp: signUpfunc,
    login: loginfunc,
    updateUser: updateUserfunc,
    deleteUser: deleteUserfunc
}