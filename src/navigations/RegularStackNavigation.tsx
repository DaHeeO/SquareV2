
import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Regular from '@/screens/regular/Regular';

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

    </RegularStack.Navigator>
  );
}
export default RegularStackNavigators;
