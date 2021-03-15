import React from 'react';
import { Container, ActionButton, ActionText, SpanText } from './styles';
import SASIcon from '../../../assets/images/sas-image.svg'

const LoginOrRegister = ({ navigation }) => {
  return (
    <Container>
      <SASIcon />
      <ActionButton onPress={() => navigation.navigate('Login')}>
        <ActionText>
          Login
        </ActionText>
      </ActionButton>
      <SpanText>Or</SpanText>
      <ActionButton onPress={() => navigation.navigate('Register')}>
        <ActionText>
          Register
        </ActionText>
      </ActionButton>
    </Container>
  );
};

export default LoginOrRegister;