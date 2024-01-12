
import React from 'react';
import { View,StatusBar } from 'react-native';
import BottomTab from '../../components/common/bottomTab/BottomTab'
import * as S from './Profile.Styles'; // 스타일 컴포넌트 불러오기

const Profile = () => {
  console.log("프로필 렌더링");
  return (
      <S.Container>

        <S.TopBarContainer></S.TopBarContainer>
          <S.NameCard></S.NameCard>
          <S.ProfileMenu></S.ProfileMenu>
          <S.ProfileMenu></S.ProfileMenu>
          <S.ProfileMenu></S.ProfileMenu>

          <BottomTab/>
      </S.Container>
  );
};

export default Profile;
