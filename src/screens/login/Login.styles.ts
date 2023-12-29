import styled from "styled-components/native";
import {colors} from '../../components/common/globalStyles';
import { Image } from "react-native";


export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${colors.green._300};
`;

export const TextBox = styled.View`
  flex: 1;
  padding: 0px 24px;
  justify-content: center;
`
export const Regular = styled.Text`
  font-family: 'Pretendard-Regular';
  font-size: 16px;
  color: ${colors.green._50};
`;

export const ExtraBold = styled.Text`
  font-family: 'Pretendard-ExtraBold';
  font-size: 48px;
  color: ${colors.white._50};
`

export const SemiBold = styled.Text`
  font-family: 'Pretendard-SemiBold';
  font-size: 16px;
  color: ${colors.text._primary};
`

export const BoxContainer = styled.View`
  position: absolute;
  bottom: 100px;
  right: 0;
  left: 0;
  width: 100%;
  padding: 0px 24px;
`

export const KaKaoButton = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background-color: #FEE500;
  padding: 16px 24px;
  z-index: 5;
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 30px;
`;

