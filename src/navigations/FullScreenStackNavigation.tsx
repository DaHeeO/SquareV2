import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// screen
import Store from '@/screens/main/Store';

/*
메인 메뉴 스토어 화면
가게 화면
주문관련
*/
const FullScreenStack = createStackNavigator();

function FullScreenStackNavigator() {

  return (
    <FullScreenStack.Navigator
    initialRouteName='Store'
    >
      <FullScreenStack.Screen
        name="Store"
        component={Store}
        options={{
            headerShown: false,
        }}
      />
    </FullScreenStack.Navigator>
  );
}
export default FullScreenStackNavigator;
