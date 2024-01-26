
import React from 'react';
import { StatusBar } from 'react-native';
import BottomTab from '../../components/common/bottomtab/BottomTab';
import * as S from './Regular.Styles'; // 스타일 컴포넌트 불러오기

const Regular = () => {

    console.log("단골 렌더링")
  return (
    <S.Container>
      <S.TabText>여기는 단골</S.TabText>
      <BottomTab />
    </S.Container>
  );
};

export default Regular;
