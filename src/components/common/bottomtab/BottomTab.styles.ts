import styled from 'styled-components/native';

export const TabContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #FFFFFF;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  border: 2px solid green;
`;

export const TabButton = styled.TouchableOpacity`
  align-items: center;
`;

export const TabText = styled.Text`
  color: black;
  margin-top: 5px;
`;
