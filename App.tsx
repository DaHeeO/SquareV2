import React, {useEffect} from 'react';
import { Alert, Platform } from 'react-native';
import { PERMISSIONS, RESULTS, request } from "react-native-permissions";

import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/login/Login';
import Kakao from './src/screens/login/KakaoLogin';
import MainStack from './src/navigations/MainStackNavigation';
import ExploreStack from './src/navigations/ExploreStackNavigation';
import PickupStack from './src/navigations/PickUpStackNavigation';
import RegularStack from './src/navigations/RegularStackNavigation';
import ProfileStack from './src/navigations/ProfileStackNavigation';

const Stack = createStackNavigator();

function App(){

  const cmmDevicePlatformCheck = (): boolean => {
    let isUseDevice = true;
    if (Platform.OS !== 'ios' && Platform.OS !== 'android') !isUseDevice;
    return isUseDevice;
  };

  useEffect(() => {
    const cmmReqLocationPermission = async (): Promise<void> => {
      // 모든 권한에 대해 디바이스 플랫폼을 체크합니다. (해당 되지 않는 경우 종료합니다.)
      if (!cmmDevicePlatformCheck()) return;
      const platformPermissions =
        Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
      try {
        // Request Permission
        const result = await request(platformPermissions);

        if (result === RESULTS.GRANTED) {
          console.log('권한이 허용되었습니다.');
        }
      } catch (err) {
        Alert.alert('Location permission err');
        console.warn(err);
      }

      // Display notification alert
      Alert.alert('Welcome', 'Thank you for launching the app!');
    };

    cmmReqLocationPermission();
  }, []);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainStack">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Kakao"
            component={Kakao}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainStack"
            component={MainStack}
            options={{ headerShown: false }}
          />
                    <Stack.Screen
            name="ExploreStack"
            component={ExploreStack}
            options={{ headerShown: false }}
          />
                    <Stack.Screen
            name="RegularStack"
            component={RegularStack}
            options={{ headerShown: false }}
          />
                    <Stack.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
