'use strict';

import React, {Component} from 'react';
import {
	Text, 
	View, 
	StyleSheet, 
	Image, 
	TextInput, 
	TouchableHighlight, 
	ActivityIndicator
} from 'react-native'

import buffer from 'buffer'



export default class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showProgress: false
		}
	}

	onLoginPressed() {
		console.log("Attempted Login " + this.state.username)
		this.setState({showProgress: true})

		let authService = require('./AuthService')

		authService.login({
			username: this.state.username,
			password: this.state.password
		}, (results) => {
			this.setState(Object.assign({
				showProgress: false
			}, results));
		});
	}

	render() {

		let errorCtrl = <View />;

		if(!this.state.success && this.state.badCredentials) {
			errorCtrl = <Text style={styles.error}>
				That username and password combinatoin did not work
				</Text>;
		}

		if(!this.state.success && this.state.unknownError) {
			errorCtrl = <Text style={styles.error}>
				That username and password combinatoin did not work
				</Text>;
		}

		return (
			<View style={styles.container}>
				<Image 
					style={styles.logo}
					source={require('./images/Octocat/Octocat.png')} 
				/>
				<Text styles={styles.heading}>
					Github Browser
				</Text>
				<TextInput
					onChangeText={(text) => this.setState({username: text})} 
					style={styles.input}
					placeholder="Github username"
				/>
				<TextInput 
					onChangeText={(text) => this.setState({password: text})} 
					style={styles.input}
					placeholder="Github password"
					secureTextEntry="true"
				/>
				<TouchableHighlight
					onPress={this.onLoginPressed.bind(this)}
					style={styles.button}
				>
					<Text style={styles.buttonText}>
						Log in 
					</Text>
				</TouchableHighlight>


				{errorCtrl}

				<ActivityIndicator
					animating={this.state.showProgress}
					size="large"
					style={styles.loader}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		paddingTop: 40,
		alignItems: 'center',
		padding: 10
	},
	logo: {
		width: 66,
		height: 55
	},
	heading: {
		fontSize: 30,
		marginTop: 10
	},
	input: {
		height: 50,
		marginTop: 10,
		alignSelf: "stretch",
		padding: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: "#48bbec"
	},
	button: {
		height: 50,
		backgroundColor: '#48BBEC',
		alignSelf: "stretch",
		marginTop: 10,
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 22,
		color: "#fff",
		alignSelf: 'center'
	},
	loader: {
		marginTop: 20
	},
	error: {
		color: "red",
		paddingTop: 10
	}
})
