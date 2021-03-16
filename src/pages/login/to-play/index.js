import React from 'react';
import { ToPlayButton, ToPlayText, Container, Title, DescriptionText } from './styles';


const ToPlay = ({ navigation }) => {
  return (
    <Container>
      <Title>Ready to play?</Title>
      <DescriptionText>This application aims to dynamically train English students.</DescriptionText>
      <DescriptionText>Numerous categories of questions will be listed and your questions and answers will be in English, when you answer a category, that category cannot be answered again.</DescriptionText>
      <DescriptionText>Good luck.</DescriptionText>
      <ToPlayButton onPress={() => navigation.navigate('Index')}>
        <ToPlayText>
          To Play
        </ToPlayText>
      </ToPlayButton>
    </Container>
  );
};

export default ToPlay;
