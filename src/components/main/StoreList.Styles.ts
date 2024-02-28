import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center; 
  background-color: #FFFFFF;
  width: 100%;
`;

export const List = styled.ScrollView`
  padding: 8px; 

`;



export const Item = styled.TouchableOpacity`
flex-direction: row; 
  width: 340px; 
  align-items: center; 
  padding: 16px;
  background-color: #FFFFFF;
  border-bottom-width: 1px;
  border-bottom-color: #E0E0E0;
`;

export const DetailsContainer = styled.View`
  flex: 1; 
  margin-left: 16px; 
`;
export const Icon = styled.View`
  width: 50px;
  height: 50px; 
  background: #eee; 
  border-radius: 8px; 
  margin-right: 5px;
`;

export const Name = styled.Text`
  font-size: 16px; 
  color: #333; 

`;

export const Rating = styled.Text`
  font-size: 14px; 
  color: #666;
`;


export const FirstItem = styled(Item)`
  border-top-width: 0; 
`;


export const LastItem = styled(Item)`
  border-bottom-width: 0; 
`;