import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const LoginOrRegister = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text>
        Registrar ou logar
      </Text>
    </TouchableOpacity>
  )
}

export default LoginOrRegister;