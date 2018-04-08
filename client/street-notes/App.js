// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Button,
  Easing
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// import Main from './src/components/main';
// import Logo from './src/components/Logo';
import NewsFeed from './src/components/NewsFeed';
import SecondScreen from './src/components/SecondScreen';
import ThirdScreen from './src/components/ThridScreen';


import Form from './src/components/Form';
import Wallpaper from './src/components/Wallpaper';
import PlaybackPage from './src/components/PlaybackPage'
import ProfilePage from './src/components/ArtistAbout'

// import ButtonSubmit from './src/components/ButtonSubmit';
// import SignupSection from './SignupSection';
import Logo from './src/components/Logo'

class LoginScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Wallpaper>
        <Logo/>
        <Form/>
        <Button

          title='LOGIN'
          style={styles.button_style}
          onPress={() => navigation.navigate('Details', {})}/>
          <Button

            title='View Profile'
            style={styles.button_style}
            onPress={() => navigation.navigate('Profile', {})}/>
      </Wallpaper>
    );
  }
}

const styles = StyleSheet.create({
  button_style: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    height: 40,
    // borderRadius: 20,
    borderColor: '#3B5699',
    borderWidth: 2,
    zIndex: 100,
  },
});



const RootStack = StackNavigator(
  {
    Home: {
      screen: LoginScreen,
      navigationOptions: {
     headerTitle: 'Home',
   }
    },
    Details: {
      screen: NewsFeed,
   //    navigationOptions: {
   //   headerTitle: 'FEED',
   // }
    },
    Video: {
      screen: PlaybackPage,
      navigationOptions: {
     headerTitle: 'Video',
   }
    },
    Profile: {
      screen: ProfilePage,
      navigationOptions: {
     headerTitle: 'Profile',
   }
    },
  },
  {
    initialRouteName: 'Home',
    // transitionConfig
  }

);


export default RootStack;
