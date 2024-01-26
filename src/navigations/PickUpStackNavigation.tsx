
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PickUp from '@/screens/pickup/PickUp';

const PickUpStack = createStackNavigator();

// 여기에 들어갈 화면
// - 주문상황 ? 픽업 ? 창

function PickUpStackNavigators() {
  return (
    <PickUpStack.Navigator initialRouteName="PickUp">
      <PickUpStack.Screen
        name="PickUp"
        component={PickUp}
        options={{headerShown: false}}
      />

    </PickUpStack.Navigator>
  );
}
export default PickUpStackNavigators;
