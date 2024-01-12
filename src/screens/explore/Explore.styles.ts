import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  border: 2px solid blue; // 컨테이너 영역을 표시하기 위해 파란색 테두리 추가
`;

export const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid red; // 상단 바 영역을 표시하기 위해 빨간색 테두리 추가
`;

export const SearchBar = styled.View`
  // 여기에 검색 바 스타일을 정의합니다.
  border: 2px solid green; // 검색 바 영역을 표시하기 위해 초록색 테두리 추가
`;

export const CategoryMenu = styled.ScrollView.attrs({
  horizontal: true,
})`
  // 여기에 카테고리 메뉴 스타일을 정의합니다.
  border: 2px solid yellow; // 카테고리 메뉴 영역을 표시하기 위해 노란색 테두리 추가
`;

export const FeedList = styled.FlatList`
  // 여기에 FlatList 스타일을 정의합니다.
  border: 2px solid purple; // 피드 리스트 영역을 표시하기 위해 보라색 테두리 추가
`;

export const NavigationTab = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  border: 2px solid orange; // 네비게이션 탭 영역을 표시하기 위해 주황색 테두리 추가
`;

export const TabText = styled.Text`
  color: black;
  margin-top: 5px;
`;
