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
  align-items: center;
  justify-content: center;
  elevation: 10; // 이 값을 조정하여 그림자의 높이를 변경할 수 있습니다.
  border : 1px solid red; // 필요하다면 이 테두리를 제거할 수도 있습니다.
`;
export const MenuText = styled.Text`
  color: black;
  margin-top: 5px;
  font-weight : bold;
  font-size : 17px;
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
width: 100%;
height: 100%;
align-items: center; 
justify-content: center; 
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
