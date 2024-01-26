import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

// icon
import BottomTabIcon from './BottomtabIcon';

// stackNavigator
import ExploreStackNavigators from '../../../navigations/ExploreStackNavigation';
import PickUpStackNavigators from '../../../navigations/PickUpStackNavigation';
import MainStackNavigators from '../../../navigations/MainStackNavigation';
import RegularStackNavigators from '../../../navigations/RegularStackNavigation';
import ProfileStackNavigators from '../../../navigations/ProfileStackNavigation';

const Tab = createBottomTabNavigator();

function BottompTab() {
  return (
    <Tab.Navigator
      // tabBar={props => <AnimatedTabBar {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName="MainStack">
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStackNavigators}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="explore" />
          ),
        }}
      />
      <Tab.Screen
        name="PickUpStack"
        component={PickUpStackNavigators}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="pickup" />
          ),
        }}
      />
      <Tab.Screen
        name="MainStack"
        component={MainStackNavigators}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="main" />
          ),
        }}
      />
      <Tab.Screen
        name="RegularStack"
        component={RegularStackNavigators}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="regular" />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigators}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="profile" />
          ),
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottompTab;
