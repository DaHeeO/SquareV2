
import React from 'react';
import { StatusBar } from 'react-native';
import BottomTab from '../../components/common/bottomTab/BottomTab'
import * as S from './Explore.styles'; // 스타일 컴포넌트 불러오기

const Explore = () => {

    console.log("탐색 렌더링")
  return (
    <S.Container>
      <S.TabText>여기는 탐색</S.TabText>
      <BottomTab>
        </BottomTab>
    </S.Container>
  );
};

export default Explore;
