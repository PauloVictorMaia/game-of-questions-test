import styled from 'styled-components';

export const Container = styled.View`
 align-items: center;
 margin-top: 20px;
`;

export const Title = styled.Text`
 font-size: 19px;
 color: #595959;
 margin: 15px 0;
 text-align: center;
`;

export const DescriptionText = styled.Text`
 font-size: 17px;
 font-weight: bold;
 color: #595959;
 margin: 5px 0;
`;

export const SaveButton = styled.TouchableOpacity`
 width: 50%;
 height: 50px;
 justify-content: center;
 align-items: center;
 background-color: #033464;
 border-radius: 5px;
 margin-top: 20px;
`;

export const FeedBackContainer = styled.View`
 flex-direction: row;
 width: 50%;
 justify-content: space-around;
`;

export const FeedBackText = styled.Text`
 font-size: 16px;
 margin: 5px;
`;

export const SaveText = styled.Text`
 font-size: 16px;
 color: #fff;
`;
