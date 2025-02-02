import styled from 'styled-components/native';
import {colors} from '../../components/common/globalStyles';
export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
`;

export const Top = styled.View`
  width: 100%;
  background-color: ${colors.green._50};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 20px 24px;
`

export const TopDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const LocationDiv = styled.Pressable`
  align-items: center;
  flex-direction: row;
`

export const IconDiv = styled.View`
  align-items: center;
  flex-direction: row;
`

export const Icon = styled.Pressable`
  margin-left: 16px;
`

export const SearchBar = styled.Pressable`
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
  padding: 12px 0px;
`;


export const Body = styled.View`
  flex: 1;
  width: 100%;
`