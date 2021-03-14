import React, { useState } from 'react';
import { Text, TouchableOpacity, Container } from 'react-native';

const QuestionScreen = ({ route }) => {
  const [numberQuestion, setNumberQuestion] = useState(0);
  const data = route.params.data[numberQuestion];
  console.log(data);
  return (
    <Container>
        <Text>{data.category}</Text>
        <Text>{data.question}</Text>
      <TouchableOpacity onPress={() => setNumberQuestion(numberQuestion + 1)}>
        <Text>Próximo</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default QuestionScreen;
