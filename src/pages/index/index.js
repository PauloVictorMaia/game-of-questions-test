import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, CategoryTitle, CategoryContainer, Title } from './styles';
import DATA from '../../data/category-results';
import { API } from '../../services/api';

const Index = ({ navigation }) => {
  const [keys, setKeys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const dataAsync = async () => {
      const okAsync = await AsyncStorage.getAllKeys();
      setKeys(okAsync);
      selectedCategory('');
    };
    dataAsync();
  }, [selectedCategory]);

  const setPath = (url, category) => {
    const inactivityItem = keys.filter((item) => {return item === `@${category}`;});

    if (inactivityItem.length){
      setSelectedCategory('This category has already been answered');
    } else {
      API.get(url).then((res) => {
        navigation.push('QuestionScreen', {data: res.data.results});
      });
    }
  };

  return (
    <Container>
      <Title>Choose the desired category</Title>
      <CategoryTitle>{selectedCategory}</CategoryTitle>
      {DATA.map((category, index) => (
        <CategoryContainer
          key={index}
          onPress={() => setPath(category.ulr, category.category)}>
            <CategoryTitle>{category.category}</CategoryTitle>
        </CategoryContainer>
      ))}
    </Container>
  );
};

export default Index;
