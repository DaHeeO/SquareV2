
import React from 'react';
import * as S from './Explore.styles'; // 스타일 컴포넌트 불러오기

const Explore = () => {

    console.log("탐색 렌더링")
  return (
    <S.Container>
      <S.TabText>여기는 탐색</S.TabText>
    </S.Container>
  );
};

export default Explore;
