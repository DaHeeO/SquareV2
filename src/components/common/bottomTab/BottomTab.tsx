import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {useReducer, useState} from 'react';
import {StyleSheet, View, Text, LayoutChangeEvent} from 'react-native';
import * as S from './BottomTab.styles';
// components



import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';



// import Profile from '@/screens/profile/Profile';

// icon
import BottomTabIcon from './BottomTabIcon';
import BottomBarIcon from '@/assets/icons/BottomBarIcon.svg';

// stackNavigator
import MainStackNavigators from '../../../navigations/MainStackNavigation';
import ProfileStackNavigators from '../../../navigations/ProfileStackNavigation';
import PickUpStackNavigators from '../../../navigations/PickUpStackNavigation';
import RegularStackNavigators from '../../../navigations/RegularStackNavigation';
import ExploreStackNavigators from '../../../navigations/ExploreStackNavigation';

const Tab = createBottomTabNavigator();

const AnimatedTabBar = ({
  state: {index: activeIndex, routes},
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const reducer = (state: any, action: {x: number; index: number}) => {
    return [...state, {x: action.x, index: action.index}];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({x: event.nativeEvent.layout.x, index});
  };

  return (
    <View style={animationStyles.tabBarContainer}>
      {routes.map((route, index) => {
        const active = index === activeIndex;
        const {options} = descriptors[route.key];

        return (
          <TabBarComponent
            key={route.key}
            active={active}
            options={options}
            onLayout={e => handleLayout(e, index)}
            onPress={() => navigation.navigate(route.name)}
          />
        );
      })}
    </View>
  );
};

type TabBarComponentProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
};
const TabBarComponent = ({active, options, onPress}: TabBarComponentProps) => {
  return (
    <S.Container>
      <S.PressableContainer onPress={onPress}>
        <View style={animationStyles.iconContainer}>
          {active && (
            <BottomBarIcon
              width={80}
              height={80}
              color="#EBECF0"
              style={{
                ...StyleSheet.absoluteFillObject,
                transform: [{translateY: -5}],
              }}
            />
          )}

          {options.tabBarIcon && typeof options.tabBarIcon === 'function' ? (
            options.tabBarIcon({
              focused: active ? active : false,
              color: '#000',
              size: 25,
            })
          ) : (
            <Text>로딩중</Text>
          )}
        </View>
      </S.PressableContainer>
    </S.Container>
  );
};


function BottomTab() {
  return (
    <Tab.Navigator
      tabBar={props => <AnimatedTabBar {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
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
        name="Profile"
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

const animationStyles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    width: '100%',

    justifyContent: 'space-evenly',
    backgroundColor: '#484287',
    // borderTopEndRadius: 45,
    // borderTopStartRadius: 45,
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
    flex: 1,
  },
  componentCircle: {
    position: 'absolute',
    borderRadius: 30,
    width: 60,
    height: 60,
    // backgroundColor: 'black',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: -10,
    right: -15,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTab;
