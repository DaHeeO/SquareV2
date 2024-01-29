import React from 'react';

// styled
import * as S from './Main.styles';
import { Text } from '../../components/common/fonts';
import {colors} from '../../components/common/globalStyles';

// icon
import Bell from '../../assets/icons/Bell';
import Cart from '../../assets/icons/Cart';
import Search from '../../assets/icons/Search';

// component
import LocationChange from '../../components/main/LocationChange';
import Category from '../../components/main/Category';
import EventCarousel from '../../components/main/EventCarousel';


interface MainProps {
    navigation: any;
}

const Main = ({navigation}: MainProps) => {
  const handleCategoryPress = (route: string) => {
    navigation.navigate('PickUpStack', { screen: {route} });
  };

  const NavigateToExplore = () => {
    navigation.navigate('ExploreStack', { screen: 'Explore' });
  };

  return (
    <S.Container>
        <S.Top>
            <Text size={14} color={colors.green._300} weight={'SemiBold'}>
            현재 위치는
            </Text>
            <S.TopDiv>
                <LocationChange />
                <S.IconDiv>
                    <S.Icon>
                        <Bell size={24} color={colors.text._primary} />
                    </S.Icon>
                    <S.Icon>
                        <Cart size={24} color={colors.text._primary} />
                    </S.Icon>
                </S.IconDiv>
            </S.TopDiv>
            <S.SearchBar onPress={NavigateToExplore}>
                <S.SearchDiv>
                    <Search  color={colors.text._secondary} size={24} />
                    <Text size={16} color={colors.text._secondary} weight={'Regular'} style={{paddingLeft: 12}}>
                    검색어를 입력해주세요
                    </Text>
                </S.SearchDiv>
            </S.SearchBar>
        </S.Top>
        <S.Body>
            <Category onCategoryPress={handleCategoryPress} />
            <EventCarousel/>
        </S.Body>
    </S.Container>
  );
};

export default Main;
