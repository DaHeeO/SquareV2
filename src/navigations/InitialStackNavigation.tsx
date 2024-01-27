import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// screen
import Location from '@/screens/settings/Location';
import CurLocation from '@/screens/settings/CurLocation';

/*
초기 위치 설정관련 화면
- 위치 설정 페이지
- 현재위치 설정
- 동 찾아보기
*/
const InitialStack = createStackNavigator();

function InitialStackNavigators() {
  return (
    <InitialStack.Navigator 
    initialRouteName="Location"
    
    >
      <InitialStack.Screen
        name="Location"
        component={Location}
        options={{headerShown: false}}
      />
      <InitialStack.Screen
        name="CurLocation"
        component={CurLocation}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </InitialStack.Navigator>
  );
}
export default InitialStackNavigators;
