import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// screen
import Main from '@/screens/main/Main';
import Store from '@/screens/main/Store';

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
