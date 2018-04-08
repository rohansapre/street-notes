import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
// import SignupSection from './SignupSection';
import Logo from './Logo'
import { StackNavigator } from 'react-navigation';


export default class LoginScreen extends Component {
  render() {
    // <Text > LOGIN </Text>
    const { navigation } = this.props;
    return (
      <Wallpaper>
        <Logo/>
        <Form />

        <ButtonSubmit  onPress={() => navigation.navigate('SelectAction', {})}/>
      </Wallpaper>
    );
  }
}
