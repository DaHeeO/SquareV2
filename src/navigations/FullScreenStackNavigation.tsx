import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// screen
import Store from '@/screens/main/Store';
import StoreDetail from '@/screens/main/StoreDetail';
import StoreLocation from '@/screens/main/StoreLocation';

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
      <FullScreenStack.Screen
        name="StoreDetail"
        component={StoreDetail}
        options={{ 
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS
        }} 
      />
      <FullScreenStack.Screen
        name="StoreLocation"
        component={StoreLocation}
        options={{ 
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS
        }} 
      />
    </FullScreenStack.Navigator>
  );
}
export default FullScreenStackNavigator;
