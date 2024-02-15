import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #FFFFFF;
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
export const Text = styled.Text`
  color: black;
  flex: 1; 
  text-align: center; 
`;

export const IconDiv = styled.View`
  align-items: center;
  flex-direction: row;
`
export const Icon = styled.Pressable`
  margin-left: 16px;
`

export const SearchBar = styled.Pressable`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 85%;
  margin-top:10px;
  padding: 0px 20px;
  background-color: #F7F7F7;
  border-radius: 8px;
`;
export const SearchDiv = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  padding: 12px 0px;

`;

export const BackButtonFlexBoxLeft = styled.TouchableOpacity`
  width: 10%;
  align-items: center;
  justify-content: center;
  left: 0;
  z-index: 10; 
`;
export const BackButtonIcon = styled.Image`
  width: 100%;
  height: 20%;
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
