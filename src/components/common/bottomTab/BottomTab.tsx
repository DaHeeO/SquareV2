// BottomTab.js
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './BottomTab.styles';

const BottomTab = ({ navigation }: any) => {

  return (
    <S.TabContainer>
      <S.TabButton onPress={() => navigation.navigate('Explore')}>
        <S.TabText>탐색</S.TabText>
      </S.TabButton>
      <S.TabButton onPress={() => navigation.navigate('PickUp')}>
        <S.TabText>픽업</S.TabText>
      </S.TabButton>
      <S.TabButton onPress={() => navigation.navigate('Main')}>
        <S.TabText>메인</S.TabText>
      </S.TabButton>
      <S.TabButton onPress={() => navigation.navigate('Regular')}>
        <S.TabText>단골</S.TabText>
      </S.TabButton>
      <S.TabButton onPress={() => navigation.navigate('Profile')}>
        <S.TabText>마이</S.TabText>
      </S.TabButton>
    </S.TabContainer>
  );
};

export default BottomTab;
