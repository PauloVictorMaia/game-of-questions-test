import styled from 'styled-components';

export const Container = styled.View`
 flex: 1;
 align-items: center;
 justify-content: center;
`;

export const Title = styled.Text`
 font-size: 20;
 color: #595959;
`;

export const DescriptionText = styled.Text`
 text-align: center;
 color: #595959;
 font-size: 15;
 margin: 10px 5px;
`;

export const ToPlayButton = styled.TouchableOpacity`
 justify-content: center;
 align-items: center;
 width: 80%;
 height: 40px;
 border-radius: 15px;
 background-color: #033464;
`;

export const ToPlayText = styled.Text`
 color: #fff;
 font-size: 16px;
 font-weight: bold;
`;
