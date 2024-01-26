import React from 'react';

// styled
import * as S from './Main.styles';
import { Text } from '../../components/common/fonts';
import {colors} from '../../components/common/globalStyles';

// icon
import Bell from '../../assets/icons/Bell';
import Cart from '../../assets/icons/Cart';

// component
import MenuSearchBar from '../../components/main/MenuSearchBar';
import LocationChange from '../../components/main/LocationChange';


interface MainProps {
    navigation: any;
}

const Main = ({navigation}: MainProps) => {
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
            <MenuSearchBar />
        </S.Top>
        <S.Body>
        </S.Body>
    </S.Container>
  );
};

export default Main;
