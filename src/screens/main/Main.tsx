// Main.tsx
import React from 'react';
import { StatusBar } from 'react-native';
import BottomTab from '../../components/common/bottomTab/BottomTab'
import * as S from './Main.styles'; // 스타일 컴포넌트 불러오기

const Main = () => {
  return (
    <S.Container>
      <StatusBar barStyle="dark-content" />
      <S.TopBar>

      </S.TopBar>
      <S.SearchBar>
        {/* 검색 바 컴포넌트 */}

      </S.SearchBar>
      <S.CategoryMenu>
        {/* 카테고리 선택 메뉴 컴포넌트 */}
 
      </S.CategoryMenu>

      <BottomTab>
        </BottomTab>
    </S.Container>
  );
};

export default Main;
