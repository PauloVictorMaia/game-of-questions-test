import React, { useEffect, useState } from 'react';
import {
  Container,
  CategoryText,
  CategoryQuestion,
  CategoryDifficulty,
  SelectItem,
  SelectText,
  ConfirmButton,
  ConfirmText,
  TopContainer,
  ResultQuestion } from './styles';

const QuestionScreen = ({ route, navigation }) => {
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [random, setRandom] = useState(0);
  const [result, setResult] = useState([]);
  const [resultQuestion, setResultQuestion] = useState('');
  const data = route.params.data[numberQuestion];
  const IncorrectQuestions = data.incorrect_answers;

  useEffect(() => {
    setRandom((Math.random() * 10).toFixed());
  },[numberQuestion]);

  function changeQuestion(){
    if (numberQuestion <= 9 ){
      setNumberQuestion(numberQuestion + 1);
      setResult([...result, {difficulty: data.difficulty, correct: correct}]);
      if (correct){
        setResultQuestion('you got the previous question right');
      } else {
        setResultQuestion('you missed the previous question');
      }
    } else {
        if (correct){
          setResultQuestion('you got the previous question right');
        } else {
          setResultQuestion('you missed the previous question');
        }
        navigation.push('Results',{data: result, category: data.category});
     }
  }

  return (
    <Container>
      <TopContainer>
        <CategoryText>Category: {data.category}</CategoryText>
        <CategoryDifficulty>{data.difficulty}</CategoryDifficulty>
      </TopContainer>
      <CategoryQuestion>{data.question}</CategoryQuestion>
      {random <= 5 &&
        <SelectItem onPress={() =>  setCorrect(true)}>
          <SelectText>{data.correct_answer}</SelectText>
        </SelectItem>
      }
      {IncorrectQuestions.map((item, index) => (
        <SelectItem key={index} onPress={() => setCorrect(false)}>
          <SelectText>{item}</SelectText>
        </SelectItem>
      ))}
      {random >= 6 &&
        <SelectItem onPress={() =>  setCorrect(true)}>
          <SelectText>{data.correct_answer}</SelectText>
        </SelectItem>
      }
      <ConfirmButton onPress={() => changeQuestion()}>
        <ConfirmText>Confirm</ConfirmText>
      </ConfirmButton>
      <ResultQuestion>{resultQuestion}</ResultQuestion>
    </Container>
  );
};

export default QuestionScreen;
