import AsyncStorage from '@react-native-async-storage/async-storage';
import * as S from './Login.styles';
import React, {useEffect} from 'react';

// component
import checkFirstLaunch from '../../components/common/CheckFirstLaunch';

interface Props {
  navigation: any;
}

const AccessToken = ({navigation}: Props) => {


  useEffect(() => {
    const navigateByCase = async() => {
      const isFirst = await checkFirstLaunch();
      // 앱 처음 설치라면
      if(isFirst){
        navigation.navigate('Permission');
        console.log('앱 처음 깔았다 이거야...')
      }
      // 아니면 토큰 확인해서 Login으로 빠지거나 Main으로
      else {
        const token = await AsyncStorage.getItem('accessToken');
        // 토큰 있을 때
        if(token) {
          navigation.navigate('Main');
          console.log('토큰 있을껄 근데 바꿔야 됨...')
        }
        // 토큰 없을 때
        else {
          navigation.replace('Login');
          console.log('토큰없다...')
        }
  
      }
    };

    navigateByCase();
    
  }, []);

  return (
    // Render loading or splash screen here, or return null
    null
  );
};

export default AccessToken;
