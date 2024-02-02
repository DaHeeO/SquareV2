import React from 'react';

// styled
import styled from 'styled-components/native';
import {colors} from './globalStyles';
import {Text} from './fonts';

// icon
import Left from '@/assets/icons/Left';
import Home from '@/assets/icons/Home';
import Cart from '@/assets/icons/Cart';
import { Pressable } from 'react-native';

interface TopProps {
    onPopBack: () => void;
    onNavigateToHome: () => void;
    onNavigateToCart: () => void;
    title: string;
}

const Top = ({onPopBack, onNavigateToCart, onNavigateToHome, title}: TopProps) => {

  return (
    <TopDiv>
        <IconDiv>
          <Pressable onPress={onPopBack} style={{marginRight: 4}}>
            <Left size={24} color={colors.text._primary} />
          </Pressable>
          <Text size={18} color={colors.text._primary} weight={'SemiBold'}>{title}</Text>
        </IconDiv>
        <IconDiv>
          <Icon onPress={onNavigateToHome}>
            <Home size={24} color={colors.text._primary} />
          </Icon>
          <Icon onPress={onNavigateToCart}>
            <Cart size={24} color={colors.text._primary} />
          </Icon>
        </IconDiv>
      </TopDiv> 
  );
};

const TopDiv = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 15px 20px;
  width: 100%;
`;

const IconDiv = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const Icon = styled.Pressable`
  margin-left: 16px;
`

export default Top;
