import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Index')}>
      <Text>
        logar
      </Text>
    </TouchableOpacity>
  );
};

export default Login;