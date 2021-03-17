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

  const allQuestions = route.params.data;
  const MediumQuestions = allQuestions.filter((item) => {return item.difficulty === 'medium';});
  const EasyQuestions = allQuestions.filter((item) => {return item.difficulty === 'easy';});
  const HardQuestions = allQuestions.filter((item) => {return item.difficulty === 'hard';});

  const [activityQuestions, setActivityQuestions] = useState(MediumQuestions);
  const data = activityQuestions[numberQuestion];
  const activityDifficutly = data.difficulty;

  const [correct, setCorrect] = useState(false);
  const IncorrectQuestions = data.incorrect_answers;

  const lastQuestion = result.filter((item, index) => {return index === result.length - 1;});
  const penultimateQuestions = result.filter((item, index) => {return index === result.length - 2;});

  const twoRightLast = lastQuestion.filter(() => {return lastQuestion[0].correct === true;});
  const twoRightPenultimate = penultimateQuestions.filter(() => {return penultimateQuestions[0].correct === true;});

  const twoWrongLast = lastQuestion.filter(() => {return lastQuestion[0].correct === false;});
  const twoWrongPenultimate = penultimateQuestions.filter(() => {return penultimateQuestions[0].correct === false;});
  const LastQuestionsTrue = twoRightLast.length + twoRightPenultimate.length;
  const LastQuestionsFalse = twoWrongLast.length + twoWrongPenultimate.length;



  const sendFeedbackMessage = (message = {correct: 'you got the previous question right', wrong: 'you missed the previous question'}) => {
    if (correct) return setResultQuestion(message.correct);
     return setResultQuestion(message.wrong);
  };

  const setDifficutlyQuestion = () => {
    if (LastQuestionsFalse > 0 && activityDifficutly === 'medium') return setActivityQuestions(EasyQuestions);
    if (LastQuestionsTrue > 0 && activityDifficutly === 'medium') return setActivityQuestions(HardQuestions);
    if (LastQuestionsTrue >= 1 && activityDifficutly === 'easy') return setActivityQuestions(MediumQuestions);
    if (LastQuestionsFalse > 0 && activityDifficutly === 'hard') return setActivityQuestions(MediumQuestions);
  };

  const changeQuestion = () => {
    if (numberQuestion <= 9 ){
      setNumberQuestion(numberQuestion + 1);
      setResult([...result, {difficulty: data.difficulty, correct: correct}]);
      sendFeedbackMessage();
    } else {
        sendFeedbackMessage();
        navigation.push('Results',{data: result, category: data.category, date: JSON.stringify(new Date())});
     }
     setDifficutlyQuestion();
  };

  useEffect(() => {
    setRandom((Math.random() * 10).toFixed());
  },[numberQuestion]);

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
