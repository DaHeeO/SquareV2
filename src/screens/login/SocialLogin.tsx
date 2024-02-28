import React, {useEffect, useRef} from 'react';
import {Dimensions, Text, View} from 'react-native';
import axios from 'axios';
import {WebView} from 'react-native-webview';

const SocialLogin = ({navigation, route}: any) => {
  const webViewRef = useRef<WebView>(null);
  const {uri} = route.params;
  const handleNavigationStateChange = async (navState: any) => {
    const {url} = navState;
    // Redirect URL이 "/main"인 경우 메인 페이지로 이동
    const pattern = /\/success\?token=(.+)/;
    const match = url.match(pattern);
    if (match) {
      const token = match[1];
      await axios
        .get(`http://211.106.142.49:8080/buyers/login?token=${token}`, {
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
        uri: uri,
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

export default SocialLogin;
