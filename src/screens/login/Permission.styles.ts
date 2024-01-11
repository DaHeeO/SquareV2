import styled from "styled-components/native";
import {colors} from '../../components/common/globalStyles'

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 24px;
`;

export const Top = styled.View`
  align-items: center;
  padding: 20px 0px 40px 0px;
  width: 100%;
`;

export const Main = styled.View`
  width: 100%;
`;

export const Bottom = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.text._primary};
  border-radius: 10px;
`