import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Title, DescriptionText, SaveButton, SaveText, FeedBackContainer, FeedBackText } from './styles';
import { Alert, ScrollView } from 'react-native';

const Results = ({ route, navigation }) => {
  const data = route.params.data;
  const category = route.params.category;
  const date = route.params.date;
  const corrects = data.filter((item) => {return item.correct === true;});
  const incorrects = data.filter((item) => {return item.correct !== true;});
  const correctEasy = data.filter((item) => {return item.correct === true && item.difficulty === 'easy';});
  const incorrectEasy = data.filter((item) => {return item.correct !== true && item.difficulty === 'easy';});
  const correctMedium = data.filter((item) => {return item.correct === true && item.difficulty === 'medium';});
  const incorrectMedium = data.filter((item) => {return item.correct !== true && item.difficulty === 'medium';});
  const correctHard = data.filter((item) => {return item.correct === true && item.difficulty === 'hard';});
  const incorrectHard = data.filter((item) => {return item.correct !== true && item.difficulty === 'hard';});

  const saveContentAndGoMenu = async () => {
    try {
      await AsyncStorage.setItem(`@${category}`, JSON.stringify({
        data: data,
        category: category,
        date: date,
      }));
      navigation.navigate('ToPlay');
    } catch (err) {
      Alert('Did something wrong happen', err);
    }
  };

  return (
    <ScrollView>
    <Container>
      <Title>{category}</Title>
      {category === 'invalid' &&
        <Title>an error occurred and invalid questions were selected, this result will not be stored</Title>
      }
      <Title>Overall performance {`${corrects.length} correct, `} {`${incorrects.length} wrong`}</Title>
      <DescriptionText>Hard: {`${correctHard.length} correct, `} {`${incorrectHard.length} wrong`}</DescriptionText>
      <DescriptionText>Medium: {`${correctMedium.length} correct, `} {`${incorrectMedium.length} wrong`}</DescriptionText>
      <DescriptionText>Easy: {`${correctEasy.length} correct, `} {`${incorrectEasy.length} wrong`}</DescriptionText>
      {data.map((item, index) => (
        <FeedBackContainer key={index}>
          <FeedBackText>{`${index + 1} - `}</FeedBackText>
          <FeedBackText>{item.difficulty}</FeedBackText>
          <FeedBackText>{item.correct ? 'correct' : 'incorrect'}</FeedBackText>
        </FeedBackContainer>
      ))}
      <SaveButton onPress={() => saveContentAndGoMenu()}>
        <SaveText>save and goto menu</SaveText>
      </SaveButton>
    </Container>
    </ScrollView>
  );
};

export default Results;
