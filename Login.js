'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput, TouchableHighlight} from 'react-native'

type Props = {};


export default class Login extends Component<Props> {

	render() {
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
					style={styles.input}
					placeholder="Github username"
				/>
				<TextInput 
					style={styles.input}
					placeholder="Github password"
					secureTextEntry="true"
				/>
				<TouchableHighlight
					style={styles.button}
				>
					<Text style={styles.buttonText}>
						Log in 
					</Text>
				</TouchableHighlight>
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
	}
})
