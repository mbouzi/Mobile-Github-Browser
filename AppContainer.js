'use strict';

import React, {Component} from 'react';
import {
	Text, 
	View, 
	StyleSheet,
	TabBarIOS
} from 'react-native'




export default class AppContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedTab: 'feed'
		}
	}

	

	render() {

		

		return (
	        <TabBarIOS style={styles.container}>
	        	<TabBarIOS.Item
	        		title="Feed"
	        		selected={this.state.selectedTab == 'feed'}
	        		onPress={() => this.setState({selectedTab: 'feed'})}
	        	>
	        		<Text style={styles.welcome}> Tab 1 </Text>
	        	</TabBarIOS.Item>
	        	<TabBarIOS.Item
	        		title="Search"
	        		selected={this.state.selectedTab == 'search'}
	        		onPress={() => this.setState({selectedTab: 'seach'})}
	        	>
	        		<Text style={styles.welcome}> Tab 2 </Text>
	        	</TabBarIOS.Item>
	        </TabBarIOS>
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
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	}
})
