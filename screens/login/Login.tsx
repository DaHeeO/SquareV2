import React from 'react';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TitleBox = styled.View`
  margin-bottom: 20px;
  /* 여기에 추가적인 스타일 속성을 정의할 수 있습니다 */
`;

const TitleImage = styled.Image`
  /* 이미지 사이즈와 관련된 스타일 속성을 정의할 수 있습니다 */
`;

const KakaoButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #FEE500;
  padding: 10px 20px;
  border-radius: 30px;
  /* 여기에 추가적인 스타일 속성을 정의할 수 있습니다 */
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const KakaoText = styled.Text`
  color: #191919;
  /* 여기에 추가적인 스타일 속성을 정의할 수 있습니다 */
`;

const KakaoIcon = require('../../assets/images/KakaoIcon.png');

type LoginStackParamList = {
    Kakao: undefined; 
  };

type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Kakao'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const Login = ({ navigation }: Props) => {

  return (
    <Container>

      {/* 이부분 수정 ㄱㄱ */}
      <KakaoButton onPress={() => navigation.navigate('Kakao')}>
        <Icon source={KakaoIcon} />
        <KakaoText>카카오로 시작하기</KakaoText>
      </KakaoButton>
    </Container>
  );
};

export default Login;
