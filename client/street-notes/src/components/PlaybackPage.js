import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Dimensions
} from 'react-native';
import {
  Button
} from 'native-base';
import { StackNavigator } from 'react-navigation';
import { Video } from 'expo';
import ProgressBar from './ProgessBar';


export default class PlaybackPage extends Component {


   	constructor(props) {
		super(props);
		// const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			isLoading: true,
			dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
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
    }, 100);
  }
  render() {
    const { width } = Dimensions.get('window');
  return (
    this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
      <View style={styles.container}>
          <Video source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
            shouldPlay
            resizeMode="cover"
            style={{ width, height: 300 }}/>
            <View style={styles.controlBar}>
              <Text>Subscribe</Text>
            </View>
            <View style={styles.controlBar2}>
              <Text>Support on Patreon</Text>
            </View>
            <View style={styles.txtView}>
              <Text>ARTIST NAME</Text>
            </View>
            <View style={styles.txtView}>
              <Text>Uploaded by Amul Mehta</Text>
            </View>
      </View>);

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
