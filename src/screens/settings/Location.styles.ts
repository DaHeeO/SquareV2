import styled from "styled-components/native";
import {colors} from '../../components/common/globalStyles';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 24px;
`;

export const Top = styled.View`
  align-items: center;
  padding: 20px 0px 30px 0px;
  width: 100%;
`;

export const SearchBar = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 0px 20px;
  background-color: ${colors.white._500};
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const SearchDiv = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

export const TextInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: colors.text._secondary,
}))`
  flex: 1;
  font-family: 'Pretendard-Regular';
  font-size: 16px;
  color: ${colors.text._primary};
  padding: 12px;
`;

export const Close = styled.TouchableOpacity``

export const CurrentLocation = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const CLDiv = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Background = styled.ImageBackground`
  margin-top: 130px;
  width: 100%;
  height: 300px;
`;