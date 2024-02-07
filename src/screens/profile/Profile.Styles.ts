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
  padding: 10px; 
`;

export const Title = styled.Text`
  font-size: 20px; 
  font-weight: bold; 
  color: #333; 
`;

export const Text = styled.Text`
  color: black;
  flex: 1; 
  text-align: center; 
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
  align-items: center;
  justify-content: center; 
`;

export const ProfileImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  border-width: 10px;
  margin-right: 15%;
  background-color: #036635;
`;

export const ProfileInfoContainer = styled.View`
  flex-direction: row; 
  align-items: center; 

`;

export const UserInfoContainer = styled.View`
  
  margin-bottom : 30px;
`;

export const Nickname = styled.Text`
  font-weight: bold;
  font-size : 17px;
  
`;
export const Email = styled.Text`
  color: #333;
  margin-top: 10px; 
`;

export const TabButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const LocationText = styled.Text`
  font-size : 15px;
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
