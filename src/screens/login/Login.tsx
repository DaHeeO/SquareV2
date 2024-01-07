import React from 'react';

import * as S from './Login.styles';
import Wave from './Wave';

import Kakao from '../../assets/images/KakaoIcon.png'

const Login = ({ navigation }: any) => {

  return (
    <S.Container>
        <S.TextBox>
            <S.Regular>소상공인 할인 서비스</S.Regular>
            <S.ExtraBold>SQUARE</S.ExtraBold>
        </S.TextBox>
        <S.BoxContainer>
            <S.KaKaoButton onPress={() => navigation.navigate('Kakao')}>
            {/* <S.KaKaoButton onPress={cmmReqCameraPermission}> */}
                <S.Icon source={Kakao} />
                <S.SemiBold>카카오로 시작하기</S.SemiBold>
            </S.KaKaoButton>
        </S.BoxContainer>
        <Wave bottom={0} zIndex={1} />
        <Wave bottom={-30} zIndex={2} />
        <Wave bottom={-25} zIndex={0} />
    </S.Container>
  );
};

export default Login;
