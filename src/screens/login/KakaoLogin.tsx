import React, {useEffect, useRef} from 'react';
import {Dimensions, Text, View} from 'react-native';
import axios from 'axios';
import {WebView, WebViewMessageEvent} from 'react-native-webview';

const KakaoLogin = ({navigation}: any) => {
  const webViewRef = useRef<WebView>(null);
  const handleNavigationStateChange = async (navState: any) => {
    const {url} = navState;
    // Redirect URL이 "/main"인 경우 메인 페이지로 이동
    const pattern = /\/success\?token=(.+)/;
    const match = url.match(pattern);
    if (match) {
      const token = match[1];
      await axios
        .get(`http://121.184.131.115:8080/buyer/login?token=${token}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          console.log(response.data.data);
          navigation.navigate('Login');
        });
    } else {
    }
  };

  return (
    <WebView
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
      //웹뷰에서 보여줄주소
      source={{
        uri: 'http://121.184.131.115:8080/oauth2/authorization/kakao',
        method: 'GET',
        headers: {
          'Accept-Language': 'ko-KR,ko',
        },
      }}
      javaScriptEnabled
      ref={webViewRef}
      onNavigationStateChange={handleNavigationStateChange}
    />
  );
};

export default KakaoLogin;
