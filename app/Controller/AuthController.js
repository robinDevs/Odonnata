
const User = require("../Model/User/User.js")

function isAutorized(username, password)
{
	return true;
}

function _createUser(username, password, email) 
{
	newUser = new User(username, password, email);
	// newUser.save();
}

module.exports = {
    isAutorized: isAutorized,
};