import React, {useState} from 'react';
import { View } from 'react-native';

// styled
import * as S from './Main.styles';
import { Text } from '../../components/common/fonts';
import {colors} from '../../components/common/globalStyles';

// icon
import Down from '../../assets/icons/Down';
import Bell from '../../assets/icons/Bell';
import Cart from '../../assets/icons/Cart';

// component
import MenuSearchBar from '../../components/main/MenuSearchBar';

const Main = ({navigation}: any) => {
  return (
    <S.Container>
        <S.Top>
            <Text size={14} color={colors.green._300} weight={'SemiBold'}>
            현재 위치는
            </Text>
            <S.TopDiv>
                <S.LocationDiv>
                    <Text 
                    size={24} 
                    color={colors.text._primary} 
                    weight={'SemiBold'}
                    style={{marginRight: 4}}
                    >
                    덕명동
                    </Text>
                    <Down size={24} color={colors.text._primary} />
                </S.LocationDiv>
                <S.IconDiv>
                    <S.Icon>
                        <Bell size={24} color={colors.text._primary} />
                    </S.Icon>
                    <S.Icon>
                        <Cart size={24} color={colors.text._primary} />
                    </S.Icon>
                </S.IconDiv>
            </S.TopDiv>
            <MenuSearchBar/>
        </S.Top>
    </S.Container>
  );
};

export default Main;
