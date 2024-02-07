import React, {useEffect} from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';

// screen
import AccessToken from './src/screens/login/AccessToken';
import Login from './src/screens/login/Login';
import Kakao from './src/screens/login/KakaoLogin';
import Permission from './src/screens/login/Permission';
import InitialStack from './src/navigations/InitialStackNavigation';
import BottomTab from './src/components/common/bottomTab/BottomTab';
import FullScreenStack from './src/navigations/FullScreenStackNavigation';

const Stack = createStackNavigator();

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BottomTab">
          <Stack.Screen
            name="AccessToken"
            component={AccessToken}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Kakao"
            component={Kakao}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Permission"
            component={Permission}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InitialStack" // 초기 위치 설정 관련 페이지들
            component={InitialStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FullScreenStack"
            component={FullScreenStack}
            options={{ 
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS
            }} 
          />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{ 
              headerShown: false,
             }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
