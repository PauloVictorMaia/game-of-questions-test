import React from 'react';
import { Text, View } from 'react-native';

const Results = ({route}) => {
  const data = route.params.data;
  console.log(data)

  return (
    <View>
      {data.map((item) => (
        <View>
          <Text>{item.difficulty}</Text>
          <Text>{item.correct ? 'acertou' : 'errou'}</Text>
        </View>
      ))}
    </View>
  );
};

export default Results;
