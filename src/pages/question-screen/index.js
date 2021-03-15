import React, { useState } from 'react';
import { Container, CategoryText, CategoryQuestion, CategoryDifficulty, SelectItem, SelectText, ConfirmButton, ConfirmText, TopContainer } from './styles';

const QuestionScreen = ({ route, navigation }) => {
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [result, setResult] = useState([]);
  const data = route.params.data[numberQuestion];
  const IncorrectQuestions = data.incorrect_answers;
  const CorrectQuestion = data.correct_answer;
  const Questions = [IncorrectQuestions, IncorrectQuestions];
  const random = (Math.random() * 10).toFixed();

  function changeQuestion(){
    if (numberQuestion <= 9 ){
      setNumberQuestion(numberQuestion + 1);
      setResult([...result, {difficulty: data.difficulty, correct: correct}]);
    } else {
      navigation.push('Results',{data: result});
    };
  };

  return (
    <Container>
      <TopContainer>
        <CategoryText>Category: {data.category}</CategoryText>
        <CategoryDifficulty>{data.difficulty}</CategoryDifficulty>
      </TopContainer>
      <CategoryQuestion>{data.question}</CategoryQuestion>
      {IncorrectQuestions.map((item) => (
        <SelectItem onPress={() => setCorrect(false)}>
          <SelectText>{item}</SelectText>
        </SelectItem>
      ))}
      <SelectItem onPress={() =>  setCorrect(true)}>
          <SelectText>{data.correct_answer}</SelectText>
      </SelectItem>
      <ConfirmButton onPress={() => changeQuestion()}>
        <ConfirmText>Confirm</ConfirmText>
      </ConfirmButton>
    </Container>
  );
};

export default QuestionScreen;
