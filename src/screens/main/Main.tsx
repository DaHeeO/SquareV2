// Main.tsx
import React from 'react';
import { StatusBar } from 'react-native';
import * as S from './Main.styles'; // 스타일 컴포넌트 불러오기

const Main = () => {
  return (
    <S.Container>
      <StatusBar barStyle="dark-content" />
      <S.TopBar>
        {/* 상단 네비게이션 바 컴포넌트 */}
      </S.TopBar>
      <S.SearchBar>
        {/* 검색 바 컴포넌트 */}
      </S.SearchBar>
      <S.CategoryMenu>
        {/* 카테고리 선택 메뉴 컴포넌트 */}
      </S.CategoryMenu>

      <S.NavigationTab>
        {/* 하단 네비게이션 탭 컴포넌트 */}
      </S.NavigationTab>
    </S.Container>
  );
};

export default Main;
