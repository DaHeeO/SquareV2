import React, {useState} from 'react';
import {WebView} from 'react-native-webview';

// styles
import * as S from './Login.styles';
import {Text} from '../../components/common/fonts';
import {colors} from '../../components/common/globalStyles';

// icon
// import Kakao from '../../assets/images/kakaoIcon.png';

// component
import Wave from './Wave';
import {Dimensions} from 'react-native';

// import Kakao from '../../assets/images/kakaoIcon.png'

const Login = ({navigation}: any) => {
  return (
    <S.Container>
      <S.TextBox>
        <Text size={16} color={'white'} weight={'Regular'}>
          소상공인 할인 서비스
        </Text>
        <Text size={48} color={'white'} weight={800}>
          SQUARE
        </Text>
      </S.TextBox>
      <S.ButtonContainer>
        {/* 여기 카카오 로그인 성공하면 처음 사용자한테는 location으로 이동 아니면 main */}
        <SocialLoginBtn
          clientName="카카오"
          navigation={navigation}
          navigateTo="SocialLogin"
          textColor={colors.text._primary}
          color="#fee500"
          uriPath="kakao"
        />
        <SocialLoginBtn
          clientName="구글"
          navigation={navigation}
          navigateTo="SocialLogin"
          textColor={colors.text._primary}
          color="white"
          uriPath="google"
        />
        <SocialLoginBtn
          clientName="네이버"
          navigation={navigation}
          navigateTo="SocialLogin"
          textColor="white"
          color="#2DB400"
          uriPath="naver"
        />
      </S.ButtonContainer>
      <Wave
        direction={'left'}
        bottom={-70}
        right={0}
        zIndex={2}
        SIZE={550}
        duration={1600}
        sx={0.1}
        sy={1.0}
      />
      <Wave
        direction={'right'}
        bottom={-60}
        right={-5}
        zIndex={2}
        SIZE={450}
        duration={1300}
        sx={0.3}
        sy={0.9}
      />
      <Wave
        direction={'left'}
        bottom={-40}
        right={-10}
        zIndex={1}
        SIZE={450}
        duration={900}
        sx={0.4}
        sy={0.6}
      />
    </S.Container>
  );
};

export default Login;

const SocialLoginBtn = ({
  color,
  navigation,
  navigateTo,
  clientName,
  uriPath,
  textColor,
}: any) => {
  return (
    <S.SocialLoginButton
      color={color}
      onPress={() => {
        navigation.navigate(navigateTo, {
          uri: `http://211.106.142.49:8080/oauth2/authorization/${uriPath}`,
        });
      }}>
      {/* <S.Icon source={Kakao} /> */}
      <Text size={16} color={textColor} weight={'SemiBold'}>
        {clientName}로 시작하기
      </Text>
    </S.SocialLoginButton>
  );
};
