
import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Text, View } from 'react-native';
import PickUp from '@/screens/pickup/PickUp';

const PickUpStack = createStackNavigator();

// 여기에 들어갈 화면
// - 주문상황 ? 픽업 ? 창



function PickUpStackNavigators() {
  return (
    <PickUpStack.Navigator initialRouteName="Order">
      <PickUpStack.Screen
        name="Order"
        component={PickUp}
        options={{headerShown: false}}
      />

    </PickUpStack.Navigator>
  );
}
export default PickUpStackNavigators;
