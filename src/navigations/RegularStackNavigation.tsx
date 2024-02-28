
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Regular from '@/screens/regular/Regular';
import StoreDetail from '@/screens/main/StoreDetail';
import StoreLocation from '@/screens/main/StoreLocation';

const RegularStack = createStackNavigator();

// 여기에 들어갈 화면
// 단골 리스트

function RegularStackNavigators() {
  return (
    <RegularStack.Navigator initialRouteName="Regular">
      <RegularStack.Screen
        name="Regular"
        component={Regular}
        options={{headerShown: false}}
      />
      <RegularStack.Screen
        name="StoreDetail"
        component={StoreDetail}
        options={{headerShown: false}}
      />
        <RegularStack.Screen
        name="StoreLocation"
        component={StoreLocation}
        options={{headerShown: false}}
      />
    </RegularStack.Navigator>
  );
}
export default RegularStackNavigators;
