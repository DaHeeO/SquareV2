
// BottomTab.js
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import * as S from './BottomTab.styles';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const BottomTab = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    
    <S.TabContainer>
      <S.TabButton onPress={() => navigation.navigate('ExploreStack')}>
        <S.TabText>탐색</S.TabText>
      </S.TabButton>
      <S.TabButton onPress={() => navigation.navigate('PickUpStack')}>
        <S.TabText>픽업</S.TabText>
      </S.TabButton>
      <S.TabButton onPress={() => navigation.navigate('MainStack')}>
        <S.TabText>메인</S.TabText>
      </S.TabButton>
      <S.TabButton onPress={() => navigation.navigate('RegularStack')}>
        <S.TabText>단골</S.TabText>
      </S.TabButton>
      <S.TabButton onPress={() => navigation.navigate('ProfileStack')}>
        <S.TabText>마이</S.TabText>
      </S.TabButton>
    </S.TabContainer>
  );
};

export default BottomTab;
