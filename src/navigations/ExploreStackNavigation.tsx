import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Explore from '@/screens/explore/Explore';
import FullScreenStackNavigators from '../navigations/FullScreenStackNavigation';

const ExploreStack = createStackNavigator();



// 여기에 들어갈 화면
// - 검색창
// - 지도창


function ExploreStackNavigators() {
  return (
    <ExploreStack.Navigator initialRouteName="Explore">
      <ExploreStack.Screen
        name="Explore"
        component={Explore}
        options={{headerShown: false}}
      />
      <ExploreStack.Screen
        name="Store"
        component={FullScreenStackNavigators}
        options={{headerShown: false}}
      />
    </ExploreStack.Navigator>
  );
}
export default ExploreStackNavigators;
