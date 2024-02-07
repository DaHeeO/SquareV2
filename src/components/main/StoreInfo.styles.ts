import styled from 'styled-components/native';
import {colors} from '../common/globalStyles';
import { Image } from 'react-native';

export const Container =  styled.View`
  flex: 1;
  width: 100%;
  height: 10000px;
  padding: 30px 24px 10px 24px;
`

export const ImageDiv = styled.View`
  position: absolute;
  top: -55px;
  left: 24px;
  width: 75px;
  height: 75px;
  border-radius: 20px;
  z-index: 2;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
  elevation: 3;
`

export const StoreImage = styled(Image)`
  width: 75px;
  height: 75px;
  border-radius: 20px;
`;

export const ReviewDiv = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`

export const ReviewBox = styled.View`
  flex-direction: row;
  align-items:center;
`

export const DetailInfo = styled.View`
  margin: 10px 0px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.white._600};
  padding: 10px 15px 10px 10px;
`

export const DetailDiv = styled.View`
  flex-direction: row;
`

export const TextBox = styled.View`
  flex: 1;
  margin-left: 12px;
`