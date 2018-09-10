/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import Login from './Login'
import AuthService from './AuthService'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      checkAuth: true
    }
  }

  componentDidMount() {
    AuthService.getAuthInfo((err, authInfo) => {
      this.setState({
        checkAuth: false,
        isLoggedIn: authInfo != null
      })
    })
  }

  onLogin() {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {

    let message = 'hello haan'

    console.log("CHECKED", this.state.checkAuth)
    console.log("LOGGED:", this.state.isLoggedIn)

    if(this.state.checkAuth) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
            animating={true}
            size="large"
            style={styles.loader}
          />
        </View>
      )
    }

     if(this.state.isLoggedIn) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}> Logged In</Text>
        </View>
      )
    } else {
      return (
        <Login onLogin={this.onLogin.bind(this)} />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
