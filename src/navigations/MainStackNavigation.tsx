import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Main from '@/screens/main/Main';

const MainStack = createStackNavigator();


function MainStackNavigators() {
  return (
    <MainStack.Navigator initialRouteName="Main">
      <MainStack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />

    </MainStack.Navigator>
  );
}
export default MainStackNavigators;
