import styled from "styled-components/native";
import {colors} from '../../components/common/globalStyles';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 30px 24px;
  width: 100%;
`;

export const IconDiv = styled.Pressable`
  alignitems: center;
  justify-content: center;
`

export const Map = styled.View`
  flex: 1;
`

export const Bottom = styled.View`
  width: 100%;
  padding: 0px 24px;
  background-color: white;
`

export const Description = styled.View`
  flex-direction: row;
  background-color: ${colors.yellow._50};
  padding: 10px 12px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.orange._50}
  margin-top: 20px;
  margin-bottom: 35px;
`

export const Img = styled(Image)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const TextBox = styled.View`
  flex: 1;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.green._300};
  border-radius: 10px;
`