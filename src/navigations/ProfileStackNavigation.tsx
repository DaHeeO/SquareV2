import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '@/screens/profile/Profile';
import Edit from '@/screens/profile/profileSubScreens/Edit';
import MyCoupon from '@/screens/profile/profileSubScreens/MyCoupon';
import MyOrderList from '@/screens/profile/profileSubScreens/MyOrderList';
import MyReview from '@/screens/profile/profileSubScreens/MyReview';
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
        component={Edit}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="MyCoupon"
        component={MyCoupon}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name="MyOrderList"
        component={MyOrderList}
        options={{headerShown: false}}
      />
            <ProfileStack.Screen
        name="MyReview"
        component={MyReview}
        options={{headerShown: false}}
      />

      
    </ProfileStack.Navigator>
  );
}
export default ProfileStackNavigators;
