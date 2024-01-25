import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';

import AccessToken from './src/screens/login/AccessToken';
import Login from './src/screens/login/Login';
import Kakao from './src/screens/login/KakaoLogin';

import MainStack from './src/navigations/MainStackNavigation';
import ExploreStack from './src/navigations/ExploreStackNavigation';
import PickupStack from './src/navigations/PickUpStackNavigation';
import RegularStack from './src/navigations/RegularStackNavigation';
import ProfileStack from './src/navigations/ProfileStackNavigation';
import Permission from './src/screens/login/Permission';

import Location from './src/screens/settings/Location';
import CurLocation from './src/screens/settings/CurLocation';
import Main from './src/screens/main/Main';


const Stack = createStackNavigator();

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AccessToken">
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
          <Stack.Screen
            name="Permission"
            component={Permission}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Location"
            component={Location}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CurLocation"
            component={CurLocation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
