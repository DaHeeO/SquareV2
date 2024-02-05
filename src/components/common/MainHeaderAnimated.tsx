import React, { useEffect, useState } from 'react';
import { Pressable } from 'react-native';

// styled
import styled from 'styled-components/native';
import {colors} from './globalStyles';
import {Text} from './fonts';

// icon
import Left from '@/assets/icons/Left';
import Home from '@/assets/icons/Home';
import Cart from '@/assets/icons/Cart';

interface TopProps {
    onPopBack: () => void;
    onNavigateToHome: () => void;
    onNavigateToCart: () => void;
    title: string;
    isTransparent: number
}

const MainHeaderAnimated = ({onPopBack, onNavigateToCart, onNavigateToHome, title, isTransparent}: TopProps) => {

  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    if (isTransparent >= 0.9) {
      setTransparent(false);
    } else {
      setTransparent(true); 
    }
  }, [isTransparent]);

  return (
    <TopDiv style={{ backgroundColor: transparent ? 'transparent' : 'white' }}>
      <IconDiv>
        <Pressable onPress={onPopBack} style={{marginRight: 4}}>
          <Left size={24} color={transparent ? 'white' : colors.text._primary} />
        </Pressable>
        <Text size={18} color={transparent ? 'white' : colors.text._primary}  weight={'SemiBold'}>
          {transparent ? '' : title }
        </Text>
      </IconDiv>
      <IconDiv>
        <Icon onPress={onNavigateToHome}>
          <Home size={24} color={transparent ? 'white' : colors.text._primary}  />
        </Icon>
        <Icon onPress={onNavigateToCart}>
          <Cart size={24} color={transparent ? 'white' : colors.text._primary}  />
        </Icon>
      </IconDiv>
    </TopDiv> 
  );
};

const TopDiv = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 15px 20px;
  width: 100%;
  z-index: 2;
`;

const IconDiv = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const Icon = styled.Pressable`
  margin-left: 16px;
`

export default MainHeaderAnimated;
