import styled from 'styled-components';

export const Container = styled.View`
 flex: 1;
 align-items: center;
 margin-top: 20px;
`;

export const Title = styled.Text`
 font-size: 24px;
 color: #595959;
 margin: 10px 0;
 font-weight: bold;
`;

export const CategoryContainer = styled.TouchableOpacity`
 width: 80%;
 height: 60px;
 border: 2px solid #ccc;
 justify-content: center;
 align-items: center;
 margin: 10px 0;
 border-radius: 20px;
`;

export const CategoryTitle = styled.Text`
 color: #595959;
 font-size: 19px;
 font-weight: bold;
`;
