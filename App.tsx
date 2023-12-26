
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login/Login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* 로그인 스크린을 첫 번째 화면으로 설정합니다. */}
        <Stack.Screen name="Login" component={Login} />
        {/* 다른 화면들을 여기에 추가합니다. */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
