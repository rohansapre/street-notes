import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Dimensions,
  Image
} from 'react-native';
import {
  Button
} from 'native-base';
import { StackNavigator } from 'react-navigation';
import ProgressBar from './ProgessBar';


export default class ProfilePage extends Component {


   	constructor(props) {
		super(props);
		// const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			isLoading: true,
			dataSource: {name : 'Artist Name',
                  City : 'New York',
                  ProfilePhoto: '../images/profile.jpeg'}
		}
	}

	renderLoader() {
		return (
			this.state.showLoader ?
			<View><Spinner color='red' /></View> : null
		)
	}

	hideLoader(){
		setTimeout(() => {
			this.setState({showLoader:false})
		}, 1);
	}
	componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading:false})
    }, 1000);
  }
  render() {
    const { width } = Dimensions.get('window');
    return (
      this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
        <View style={styles.container}>
          <Image
          style={{width:width, height: 300, flex:2}}
         source={{uri:'https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png'}}>
         </Image>
         <Text style={styles.txtView}>this.state.dataSource</Text>
          <Text style={styles.txtView}>this.state.dataSource</Text>
        </View>)
  }
}
var styles = StyleSheet.create({
  progressBar: {
    flex: 1,
    justifyContent: 'center'
  },
  txtView:{
    flex:1,
    flexDirection: 'row',
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
controlBar2: {
position: 'absolute',
bottom: 45,
left: 0,
right: 0,
height: 45,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: "rgba(100, 20, 150, 0.5)",
},
controlBar: {
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
height: 45,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: "rgba(200, 0, 0, 0.5)",
}
});
