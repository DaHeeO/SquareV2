import {createBottomTabNavigator, BottomTabBarProps, BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import React, {useReducer} from 'react';
import {StyleSheet, View, LayoutChangeEvent, Pressable} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {colors} from '../globalStyles';
import {Text} from '../fonts';

// icon
import BottomTabIcon from './BottomTabIcon';

// stackNavigator
import ExploreStackNavigators from '../../../navigations/ExploreStackNavigation';
import PickUpStackNavigators from '../../../navigations/PickUpStackNavigation';
import MainStackNavigators from '../../../navigations/MainStackNavigation';
import RegularStackNavigators from '../../../navigations/RegularStackNavigation';
import ProfileStackNavigators from '../../../navigations/ProfileStackNavigation';

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

  // 후에 작업할지 말지는 모르겠지만 위에 움직이는 slide bar 만들고 싶은데 여기다 작업 해야함
  // 밑에 TabBarComponent 여기다가 하면 나중에 움직이는게 자연스럽지가 않아요

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

  // 아이콘 동적
  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, {duration: 200}),
        },
      ],
    };
  });

  return (
    <View>
      <Pressable onPress={onPress}>
      <Animated.View style={[animationStyles.circle, animatedIconContainerStyles]}/>
        <View
          style={[animationStyles.iconContainer]}>

          {options.tabBarIcon && typeof options.tabBarIcon === 'function' ? (
            options.tabBarIcon({
              focused: active ? active : false,
              color: 'black',
              size: 25,
            })
          ) : (
            <Text size={12} color={colors.text._primary} weight={'Regular'}>
            '로딩중'
            </Text>
          )}
        </View>
      </Pressable>
      <Text 
      size={12} 
      color={active ? colors.text._primary : colors.text._secondary} 
      weight={'SemiBold'}
      style={{textAlign: 'center', marginTop: 5}}
      >
        {typeof options.tabBarLabel === 'function' ? (
          options.tabBarLabel({
            focused: active ? active : false,
            color: colors.text._secondary,
            position: 'below-icon',
            children: '',
          })
        ) : (
          options.tabBarLabel || '로딩중'
        )}
      </Text>

    </View>
  );
};


function BottomTab() {
  return (
    <Tab.Navigator
      tabBar={props => <AnimatedTabBar {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName="MainStack">
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStackNavigators}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="explore" />
          ),
          tabBarLabel: '탐색',
        }}
      />
      <Tab.Screen
        name="PickUpStack"
        component={PickUpStackNavigators}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="pickup" />
          ),
          tabBarLabel: '픽업',
        }}
      />
      <Tab.Screen
        name="MainStack"
        component={MainStackNavigators}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="main" />
          ),
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name="RegularStack"
        component={RegularStackNavigators}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="regular" />
          ),
          tabBarLabel: '단골',
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigators}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="profile" />
          ),
          tabBarLabel: '마이',
        }}
      />
    </Tab.Navigator>
  );
}

const animationStyles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: colors.white._500,
    paddingTop: 8,
    paddingBottom: 8,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: colors.green._100,
  },
});

export default BottomTab;
