import React from 'react';
import { View } from 'react-native';
import BottomTab from '../../components/common/bottomTab/BottomTab';
import * as S from './Profile.Styles'; // 스타일 컴포넌트 불러오기

const Profile = () => {
  console.log("프로필 렌더링");
  return (
    <S.Container>
    <S.TopBarContainer></S.TopBarContainer>
    <S.NameCard></S.NameCard>
    <S.ProfileMenuGrid>
    <S.ProfileMenu>
    <S.ProfileMenuImage source={require('../../assets/icons/Setting.png')} resizeMode="cover">
    <S.MenuText>내 정보 변경</S.MenuText>
    </S.ProfileMenuImage>
    </S.ProfileMenu>
    <S.ProfileMenu>
    <S.MenuText>내 쿠폰</S.MenuText>
    </S.ProfileMenu>
    </S.ProfileMenuGrid>
    <S.ProfileMenuGrid>
    <S.ProfileMenu>
    <S.MenuText>내 주문내역</S.MenuText>
    </S.ProfileMenu>
    <S.ProfileMenu>
    <S.MenuText>내가 쓴 리뷰</S.MenuText>
    </S.ProfileMenu>
    </S.ProfileMenuGrid>
    <BottomTab />
    </S.Container>
    );
    };

export default Profile;
