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
  const invalid = {
    category: 'invalid',
    difficulty: 'invalid',
    correct_answer: 'invalid',
    incorrect_answers: ['invalid', 'invalid', 'invalid'],
    type: 'invalid',
    question: 'invalid',
  };

  const [result, setResult] = useState([]);
  const [resultQuestion, setResultQuestion] = useState('');

  const allQuestions = route.params.data;
  const MediumQuestions = allQuestions.filter((item) => {return item.difficulty === 'medium';});
  const EasyQuestions = allQuestions.filter((item) => {return item.difficulty === 'easy';});
  const HardQuestions = allQuestions.filter((item) => {return item.difficulty === 'hard';});
  const [activityQuestions, setActivityQuestions] = useState(MediumQuestions);

  const data = activityQuestions[numberQuestion] ? activityQuestions[numberQuestion] : invalid;
  const activityDifficutly = data.difficulty;

  const [correct, setCorrect] = useState(false);
  const IncorrectQuestions = data.incorrect_answers;
  const lastQuestion = result.filter((item, index) => {return index === result.length - 1;});

  const LastQuestionsTrue = () => {
    if (lastQuestion[0].correct && correct) return true;
      return false;
  };

  const LastQuestionsFalse = () => {
    if (!lastQuestion[0].correct && !correct) return true;
     return false;
  };

  const sendFeedbackMessage = (message = {correct: 'you got the previous question right', wrong: 'you missed the previous question'}) => {
    if (correct) return setResultQuestion(message.correct);
     return setResultQuestion(message.wrong);
  };

  const setDifficutlyQuestion = () => {
    if (LastQuestionsFalse() && activityDifficutly === 'medium') return setActivityQuestions(EasyQuestions);
    if (LastQuestionsTrue() && activityDifficutly === 'medium') return setActivityQuestions(HardQuestions);
    if (LastQuestionsTrue() && activityDifficutly === 'easy') return setActivityQuestions(MediumQuestions);
    if (LastQuestionsFalse() && activityDifficutly === 'hard') return setActivityQuestions(MediumQuestions);
  };

  const changeQuestion = () => {
    if (numberQuestion <= 9 ){
      setNumberQuestion(numberQuestion + 1);
      setResult([...result, {difficulty: activityDifficutly, correct: correct}]);
      sendFeedbackMessage();
    } else {
        sendFeedbackMessage();
        navigation.push('Results',{data: result, category: data.category, date: JSON.stringify(new Date())});
     }

    if (result.length > 0) return setDifficutlyQuestion();
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
         <ConfirmText>{data === invalid ? 'Next' : 'Confirm'}</ConfirmText>
       </ConfirmButton>
       <ResultQuestion>{resultQuestion}</ResultQuestion>
     </Container>
   );
};

export default QuestionScreen;
