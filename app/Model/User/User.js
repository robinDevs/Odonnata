function User(username, password, email)
{
	save = function () {
		//first save 
		if(!this.exists || true) {
			this._username = username,
			this._password = password,
			this._email    = email
		}
		// Entity.save();
	}
}



module.exports = User;