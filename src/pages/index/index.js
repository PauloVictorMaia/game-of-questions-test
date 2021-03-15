import React from 'react';
import { Container, CategoryTitle, CategoryContainer, Title } from './styles';
import DATA from '../../data/category-results';
import { API } from '../../services/api';

const Index = ({ navigation }) => {
  function setPath(url){
    API.get(url).then((res) => {
      navigation.push('QuestionScreen', {data: res.data.results});
    })
  };

  return (
    <Container>
      <Title>Escolha a categoria desejada</Title>
      {DATA.map((category, index) => (
        <CategoryContainer
          key={index}
          onPress={() => setPath(category.ulr)}>
            <CategoryTitle>{category.category}</CategoryTitle>
        </CategoryContainer>
      ))}
    </Container>
  );
};

export default Index;