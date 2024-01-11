import styled from "styled-components/native";
import {colors} from '../../components/common/globalStyles';
import { Image } from "react-native";


export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${colors.green._300};
`;

export const TextBox = styled.View`
  padding: 300px 24px 0px;
`

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 40px;
  width: 100%;
  padding: 0px 24px;
`

export const KaKaoButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background-color: #FEE500;
  padding-left: 28px;
  z-index: 5;
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 64px;
`;

