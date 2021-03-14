import React, { useEffect, useState } from 'react';
import { Container, CategoryTitle, CategoryContainer, Title } from './styles';
import DATA from '../../data/category-results';
import { API } from '../../services/api';

const Index = ({ navigation }) => {
  const [url, setUrl] = useState('');
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
   API.get(url).then((res) => {
    setCategoryData(res.data.results);
   })
  },[url]);

  function setCategory() {
    navigation.push('QuestionScreen', {data: categoryData});
  };

  return (
    <Container>
      <Title>Escolha a categoria desejada</Title>
      {DATA.map((category, index) => (
          <CategoryContainer
           key={index}
           onPress={() => (
              setUrl(category.ulr),
              setCategory()
           )}>
            <CategoryTitle>{category.category}</CategoryTitle>
          </CategoryContainer>
      ))}
    </Container>
  );
};

export default Index;