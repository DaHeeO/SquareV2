import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Main from '@/screens/main/Main';


const ExploreStack = createStackNavigator();



// 여기에 들어갈 화면
// - 검색창
// - 지도창


function ExploreStackNavigators() {
  return (
    <ExploreStack.Navigator initialRouteName="Search">
      <ExploreStack.Screen
        name="Search"
        component={Main}
        options={{headerShown: false}}
      />
      <ExploreStack.Screen
        name="Map"
        component={Main}
        options={{headerShown: false}}
      />
    </ExploreStack.Navigator>
  );
}
export default ExploreStackNavigators;
