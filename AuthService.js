import buffer from 'buffer'

class AuthService {
	login(creds, callback) {
		let b = new buffer.Buffer(creds.username +
			':' + creds.password);
		let encodedAuth = b.toString('base64')

		fetch('https://api.github.com/user',{
			headers: {
				'Authorization': 'Basic ' + encodedAuth
			}
		})
		.then((response) => {
			if(response.status >= 200 && response.status < 300) {
				return response
			} 

			throw {
				badCredentials: response.status == 401,
				unknownError: response.status != 401
			}
		})
		.then((response) => {
			return response.json();
		})
		.then((results) => {
			return callback({success: true})
		})
		.catch((error)=> {
     		return callback(error)
  		})
  		.finally(() => {
  			this.setState({showProgress: false})
  		})
	}
}

module.exports = new AuthService();