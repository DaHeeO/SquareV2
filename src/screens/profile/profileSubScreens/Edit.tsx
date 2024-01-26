import React from 'react';
import { View } from 'react-native';
import BottomTab from '../../../components/common/bottomTab/BottomTab';
import * as S from './ProfileSubScreens.Styles'; // 스타일 컴포넌트 불러오기

interface ProfileProps {
    navigation: any;
  }

const Edit = ({navigation}: ProfileProps) => {
  console.log("내정보변경 렌더링");
  return (
    <S.Container>
 
    <S.TopBarContainer>
        <S.BackButtonFlexBoxLeft onPress={() => navigation.navigate('Profile')}>
            <S.BackButtonIcon source={require('../../../assets/icons/BackButton.png')} resizeMode="contain"></S.BackButtonIcon>
        </S.BackButtonFlexBoxLeft>
        <S.Text>내 정보 변경</S.Text>
        <S.PlaceholderView/>
    </S.TopBarContainer>

    </S.Container>
    );

    
};

export default Edit;
