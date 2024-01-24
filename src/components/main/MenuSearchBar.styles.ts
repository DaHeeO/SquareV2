import styled from "styled-components/native";
import {colors} from '../common/globalStyles';

export const SearchBar = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 0px 20px;
  background-color: white;
  border-radius: 8px;
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