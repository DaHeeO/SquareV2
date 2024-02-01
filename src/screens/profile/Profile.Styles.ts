import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #F7F7F7;
`;

export const TopBarContainer = styled.View`
  width: ${windowWidth}px;
  height: 60px;
  background-color: #FFFFFF;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
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
  height: 150px;
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  elevation: 10;
  align-items: center; // 중앙 정렬
  justify-content: center; // 중앙 정렬
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 25px;
  border-width: 2px;
  border-color: green;
`;

// 프로필 이미지와 텍스트를 담을 컨테이너
export const ProfileInfoContainer = styled.View`
  flex-direction: row; // 가로로 배열
  align-items: center; // 세로 중앙 정렬
`;

export const UserInfoContainer = styled.View`
  margin-left: 10px; // 이미지와 텍스트 사이의 간격
`;

export const Nickname = styled.Text`
  font-weight: bold;
`;

export const Email = styled.Text`
  color: #333;
  margin-top: 4px; // 닉네임과 이메일 사이의 간격
`;

export const TabButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const LocationText = styled.Text`
  color: black;
`;




export const ProfileMenuGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px; 
`;
export const ProfileMenu = styled.TouchableOpacity`
  width: ${windowWidth * 0.40}px; 
  height: 120px; 
  background-color: #FFFFFF; 
  border-radius: 2px;
  margin: 10px; 
  align-items: center; 
  justify-content: center; 
  elevation: 1; 
  overflow: hidden;
  padding: 20px;
`;

export const ProfileMenuImage = styled.ImageBackground`
  width:100%;
  height: 100%;
  align-items: center; 
  justify-content: space-around; 
`;

export const MenuText = styled.Text`
  color: black;
  font-weight : bold;
  font-size : 17px;
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
