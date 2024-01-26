import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';

// screen
import AccessToken from './src/screens/login/AccessToken';
import Login from './src/screens/login/Login';
import Kakao from './src/screens/login/KakaoLogin';
import Permission from './src/screens/login/Permission';

// stack navigatior
import MainStack from './src/navigations/MainStackNavigation';
import ExploreStack from './src/navigations/ExploreStackNavigation';
import PickupStack from './src/navigations/PickUpStackNavigation';
import RegularStack from './src/navigations/RegularStackNavigation';
import ProfileStack from './src/navigations/ProfileStackNavigation';
import InitialStack from './src/navigations/InitialStackNavigation';

const Stack = createStackNavigator();

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
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
            name="PickUpStack"
            component={PickupStack}
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
