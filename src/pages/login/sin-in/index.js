import React from 'react';
import { Container, ActionButton, ActionText } from './styles';
import SASIcon from '../../../assets/images/sas-image.svg';

const SinIn = ({ navigation }) => {
  return (
    <Container>
      <SASIcon />
      <ActionButton onPress={() => navigation.navigate('ToPlay')}>
        <ActionText>
          Sin In
        </ActionText>
      </ActionButton>
    </Container>
  );
};

export default SinIn;
