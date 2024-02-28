
import React from 'react';
import * as S from './Explore.styles'; 


import {colors} from '../../components/common/globalStyles';
import { Text } from '../../components/common/fonts';

import Search from '../../assets/icons/Search';
import Cart from '../../assets/icons/Cart';

import Category from '../../components/main/Category';

interface ExploreProps {
  navigation: any;
}

const Explore = ( {navigation}: ExploreProps) => {


  const NavigateToExplore = ()  => {
    navigation.navigate('FullScreenStack', { screen: 'Store'});
    // 검색결과 스택으로
  };


  return (
    <S.Container>
        <S.TopBarContainer>
            <S.BackButtonFlexBoxLeft onPress={() => navigation.navigate('Main')}>
              <S.BackButtonIcon source={require('../../assets/icons/BackButton.png')} resizeMode="contain"></S.BackButtonIcon>
            </S.BackButtonFlexBoxLeft>
            <S.Text>검색</S.Text>
            <S.IconDiv>
                    <S.Icon>
                        <Cart size={24} color={colors.text._primary} />
                    </S.Icon>
            </S.IconDiv>
         </S.TopBarContainer>

         <S.SearchBar onPress={NavigateToExplore}>
                <S.SearchDiv>
                    <Search  color={colors.text._secondary} size={24} />
                    <Text size={16} color={colors.text._secondary} weight={'Regular'} style={{paddingLeft: 12}}>
                    검색어를 입력해주세요
                    </Text>
                </S.SearchDiv>
            </S.SearchBar>

    </S.Container>
  );
};

export default Explore;
