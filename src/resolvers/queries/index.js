var findUserfunc = require('./user.js').findUser
var findCandyfunc = require('./candy.js').findCandy
var findCandybyTagfunc = require('./candy.js').findCandybyTag


module.exports =  {
    findUser: findUserfunc,
    findCandy: findCandyfunc,
    findCandybyTag: findCandybyTagfunc
}