import React from 'react';
import BottomTab from '../../components/common/bottomtab/BottomTab';
import { StatusBar } from 'react-native';
import * as S from './PickUp.Styles'; // 스타일 컴포넌트 불러오기

const PickUp = () => {

    console.log("픽업 렌더링")
  return (
    <S.Container>
      <S.TabText>여기는 픽업</S.TabText>
      <BottomTab/>
    </S.Container>
  );
};

export default PickUp;
