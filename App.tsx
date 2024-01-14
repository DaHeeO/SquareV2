import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';

import Login from './src/screens/login/Login';
import Kakao from './src/screens/login/KakaoLogin';
import Permission from './src/screens/login/Permission';
const Stack = createStackNavigator();

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
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
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
