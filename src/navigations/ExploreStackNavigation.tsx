import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Explore from '@/screens/explore/Explore';


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
    </ExploreStack.Navigator>
  );
}
export default ExploreStackNavigators;
