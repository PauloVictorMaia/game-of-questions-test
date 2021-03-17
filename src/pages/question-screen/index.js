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
  const [random, setRandom] = useState(0);

  const [result, setResult] = useState([]);
  const [resultQuestion, setResultQuestion] = useState('');

  const lastQuestion = result.filter((item, index) => {return index === result.length - 1;});
  const penultimateQuestions = result.filter((item, index) => {return index === result.length - 2;});
  const twoRightLast = lastQuestion.filter(() => {return lastQuestion[0].correct === true;});
  const twoRightPenultimate = penultimateQuestions.filter(() => {return penultimateQuestions[0].correct === true;});
  const twoWrongLast = lastQuestion.filter(() => {return lastQuestion[0].correct === false;});
  const twoWrongPenultimate = penultimateQuestions.filter(() => {return penultimateQuestions[0].correct === false;});
  const LastQuestionsTrue = twoRightLast.length + twoRightPenultimate.length;
  const LastQuestionsFalse = twoWrongLast.length + twoWrongPenultimate.length;

  const allQuestions = route.params.data;
  const MediumQuestions = allQuestions.filter((item) => {return item.difficulty === 'medium';});
  const EasyQuestions = allQuestions.filter((item) => {return item.difficulty === 'easy';});
  const HardQuestions = allQuestions.filter((item) => {return item.difficulty === 'hard';});

  const [activityQuestions, setActivityQuestions] = useState(MediumQuestions);
  const data = activityQuestions[numberQuestion];
  const activityDifficutly = data.difficulty;

  const [correct, setCorrect] = useState(false);
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
        navigation.push('Results',{data: result, category: data.category, date: JSON.stringify(new Date())});
     }
     if (LastQuestionsFalse > 0 && activityDifficutly === 'medium'){
      setActivityQuestions(EasyQuestions);
     } else if (LastQuestionsTrue > 0 && activityDifficutly === 'medium') {
      setActivityQuestions(HardQuestions);
     } else if (LastQuestionsTrue >= 1 && activityDifficutly === 'easy'){
       setActivityQuestions(MediumQuestions);
     } else if (LastQuestionsFalse > 0 && activityDifficutly === 'hard'){
       setActivityQuestions(MediumQuestions);
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
       <ConfirmButton onPress={() =>  changeQuestion()}>
         <ConfirmText>Confirm</ConfirmText>
       </ConfirmButton>
       <ResultQuestion>{resultQuestion}</ResultQuestion>
     </Container>
   );
};

export default QuestionScreen;
