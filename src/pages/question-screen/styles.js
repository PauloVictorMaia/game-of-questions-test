import styled from 'styled-components';

export const Container = styled.View`
 flex: 1;
 align-items: center;
`;

export const TopContainer = styled.View`
 flex-direction: column;
 align-items: center;
 margin-top: 30px;
`;

export const CategoryText = styled.Text`
 font-size: 19px;
 font-weight: bold;
 text-align: center;
 color: #595959;
`;

export const CategoryDifficulty = styled.Text`
 font-size: 16px;
 margin-top: 10px;
`;

export const SelectItem = styled.TouchableOpacity`
 width: 80%;
 min-height: 50px;
 border-radius: 5px;
 justify-content: center;
 align-items: center;
 border: 1px solid #033464;
 margin: 15px 0;
 padding: 10px;
`;

export const SelectText =  styled.Text`
 font-size: 17px;
 font-weight: bold;
 text-align: center;
 color: #595959;
`;

export const CategoryQuestion = styled.Text`
 width: 90%;
 color: #595959;
 font-size: 16px;
 text-align: center;
 margin: 20px 0;
`;

export const ConfirmButton = styled.TouchableOpacity`
 width: 50%;
 height: 50px;
 background-color: #033464;
 justify-content: center;
 align-items: center;
 border-radius: 2px;
 margin-top: 10px;
 border-radius: 5px;
`;

export const ConfirmText = styled.Text`
 color: #fff;
 font-size: 17px;
`;

