import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;

`;

export const TopBarContainer = styled.View`
  width: ${windowWidth}px;
  height: 60px; // 적당한 높이 설정
  background-color: #f2f2f2; // TopBar의 배경색
  justify-content: space-between; // 아이템들을 양 끝으로 정렬
  align-items: center; // 아이템들을 세로 중앙에 위치
  flex-direction: row; // 아이템들을 가로로 배열
  padding: 0 10px; // 좌우 패딩
  border : 1px solid red;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 10px; // 버튼이 터치하기 쉽도록 패딩 설정
`;

export const Title = styled.Text`
  font-size: 20px; // 제목 글자 크기
  font-weight: bold; // 글자 두께
  color: #333; // 글자 색상
`;

export const NameCard = styled.View`
  width: ${windowWidth * 0.9}px;
  height: 100px;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const ProfileMenu = styled.TouchableOpacity`
  width: ${windowWidth * 0.9}px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: { width: 0, height: 2 };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
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
