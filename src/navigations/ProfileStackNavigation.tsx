import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Main from '@/screens/main/Main';
import Profile from '@/screens/profile/Profile';

const ProfileStack = createStackNavigator();

// 여기에 들어갈 화면
// - 내 쿠폰
// - 내 주문내역
// - 내가 쓴 리뷰
// - 내 정보 변경


function ProfileStackNavigators() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
        <ProfileStack.Screen
        name="Edit"
        component={Main}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="Coupon"
        component={Main}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="OrderList"
        component={Main}
        options={{headerShown: false}}
      />
            <ProfileStack.Screen
        name="Review"
        component={Main}
        options={{headerShown: false}}
      />

      
    </ProfileStack.Navigator>
  );
}
export default ProfileStackNavigators;
