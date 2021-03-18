import React from 'react';
import { Container, ActionButton, ActionText } from './styles';
import SasIcon from '../../../assets/images/sas-image.svg';

const SinIn = ({ navigation }) => {
  return (
    <Container>
      <SasIcon />
      <ActionButton testID='button-sin-in' onPress={() => navigation.navigate('ToPlay')}>
        <ActionText>
          Sin In
        </ActionText>
      </ActionButton>
    </Container>
  );
};

export default SinIn;
