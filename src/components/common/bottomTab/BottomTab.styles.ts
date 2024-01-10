// BottomTab.styles.js
import styled from 'styled-components/native';

export const TabContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #484287;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const TabButton = styled.TouchableOpacity`
  align-items: center;
  border: 2px solid green;
`;

export const TabText = styled.Text`
  color: white;
  margin-top: 5px;
`;
