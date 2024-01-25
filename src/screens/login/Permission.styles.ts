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
  flex: 1;
  width: 100%;
`;

export const Bottom = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.green._300};
  border-radius: 10px;
`