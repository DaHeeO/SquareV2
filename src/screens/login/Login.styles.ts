import styled from 'styled-components/native';
import {colors} from '../../components/common/globalStyles';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${colors.green._300};
`;

export const TextBox = styled.View`
  flex: 1;
  padding: 0px 24px;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 0px 24px 40px 24px;
  z-index: 5;
`;

export const SocialLoginButton = styled.TouchableOpacity<{color: string}>`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => props.color};
  padding-left: 28px;
  z-index: 5;
  margin-top: 10px;
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 64px;
`;
