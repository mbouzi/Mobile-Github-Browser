import buffer from 'buffer'
import {AsyncStorage} from 'react-native'
import _ from 'lodash'

const authKey = 'auth'
const userKey = 'user'

class AuthService {

	getAuthInfo(callback) {
		AsyncStorage.multiGet([authKey, userKey], (err, val) => {
			if(err) {
				return callback(err)
			} else if(!val) {
				return callback()
			}

			let zippedObj = _.zipObject(val);

			if(!zippedObj[authKey]) {
				return callback()
			}

			let authInfo = {
				header: {
					Authorization: 'Basic ' + zippedObject[authKey]
				},
				user: JSON.parse(zippedObject[userKey])
			}

			return callback(null, authInfo);
		});
	}

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
			AsyncStorage.multiSet([
					[authKey, encodedAuth],
					[userKey, JSON.stringify(results)]
				], (err) => {
					if(err) {
						throw err;
					}
					return callback({success: true})
				})
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