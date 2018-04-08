import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';


import arrowImg from '../images/left-arrow.png';


export default class ThirdScreen extends Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     isLoading: false,
  //   };
  //
  //   this._onPress = this._onPress.bind(this);
  //   this.growAnimated = new Animated.Value(0);
  // }
  //
  // _onPress() {
  //   if (this.state.isLoading) return;
  //
  //   this.setState({isLoading: true});
  //
  //   Animated.timing(this.growAnimated, {
  //     toValue: 1,
  //     duration: 300,
  //     easing: Easing.linear,
  //   }).start();
  //
  //   setTimeout(() => {
  //     this.props.navigation.goBack()
  //   }, 500);
  // }

  render() {
     const { navigate } = this.props.navigation;
    // const changeScale = this.growAnimated.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [1, SIZE],
    // });

    return (
      <Text >LOGIN - 2 </Text>

      // <View style={styles.container}>
      //   <TouchableOpacity
      //     onPress={this._onPress}
      //     style={styles.button}
      //     activeOpacity={1}>
      //     <Image style={styles.image} source={arrowImg} />
      //   </TouchableOpacity>
      //   <Animated.View
      //     style={[styles.circle, {transform: [{scale: changeScale}]}]}
      //   />
      // </View>
    );
  }
}
