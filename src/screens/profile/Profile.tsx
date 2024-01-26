import React from 'react';
import * as S from './Profile.Styles'; // 스타일 컴포넌트 불러오기

interface ProfileProps {
  navigation: any;
}

const Profile = ({navigation}: ProfileProps) => {
  console.log("프로필 렌더링");

    // 더미 데이터
    const dummyData = {
      nickname: '녹차왕', 
      email: 'yllh325@gmail.com', 
      tabTitle: '교현2동' 
    };

    
  return (
    <S.Container>
    <S.TopBarContainer></S.TopBarContainer>
    <S.NameCard>
  <S.ProfileInfoContainer>
  <S.ProfileImage source={require('../../assets/icons/enfj.png')} />
    <S.UserInfoContainer>
      <S.Nickname>{dummyData.nickname}</S.Nickname>
      <S.Email>{dummyData.email}</S.Email>
    </S.UserInfoContainer>
  </S.ProfileInfoContainer>
  <S.TabButton>
    <S.LocationText>{dummyData.tabTitle}</S.LocationText>
  </S.TabButton>
</S.NameCard>

    <S.ProfileMenuGrid>
    <S.ProfileMenu  onPress={() => navigation.navigate('Edit')}>
    <S.ProfileMenuImage source={require('../../assets/icons/Setting.png')} resizeMode="contain">
    <S.MenuText>내 정보 변경</S.MenuText>
    </S.ProfileMenuImage>
    </S.ProfileMenu>
    <S.ProfileMenu  onPress={() => navigation.navigate('MyCoupon')}>
    <S.ProfileMenuImage source={require('../../assets/icons/Coupon.png')} resizeMode="contain"  >
    <S.MenuText>내 쿠폰</S.MenuText>
    </S.ProfileMenuImage>
    </S.ProfileMenu>
    </S.ProfileMenuGrid>
    <S.ProfileMenuGrid>
    <S.ProfileMenu  onPress={() => navigation.navigate('MyOrderList')}>
    <S.ProfileMenuImage source={require('../../assets/icons/OrderList.png')} resizeMode="contain">
    <S.MenuText>내 주문내역</S.MenuText>
    </S.ProfileMenuImage>
    </S.ProfileMenu>
    <S.ProfileMenu  onPress={() => navigation.navigate('MyReview')}>
    <S.ProfileMenuImage source={require('../../assets/icons/Review.png')} resizeMode="contain">
    <S.MenuText>내가 쓴 리뷰</S.MenuText>
    </S.ProfileMenuImage>
    </S.ProfileMenu>
    </S.ProfileMenuGrid>
    </S.Container>
    );
    };

export default Profile;
