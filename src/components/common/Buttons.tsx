import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { colors } from './globalStyles';
import { Text } from './fonts';
import { Defs, LinearGradient, Path, Rect, Stop, Svg } from 'react-native-svg';

// icon
import Sort from '@/assets/icons/Sort';
import Bell from '@/assets/icons/Bell';
import Partnership from '@/assets/icons/Partnership';
import Star from '@/assets/icons/Star';
import Reset from '@/assets/icons/Reset';
import Coupon from '@/assets/icons/Coupon';
import Puzzle from '@/assets/icons/Puzzle';

interface TopProps {
  title: string;
  textColor: string;
  bgColor : string;
}

export const SaleTag = ({ title, textColor, bgColor }: TopProps) => {
  return (
    <TopDiv style={{backgroundColor:(bgColor)}}>
        <Text size={10} color={textColor} weight={'SemiBold'}>{title}</Text>
    </TopDiv>
  );
};

export const TopDiv = styled.View`
  align-items: center;
  justify-content: center;
  padding: 3px 8px;
  border-radius: 4px;
  margin-right: 6px;
`;

interface ButtonProps {
  title: string;
}

export const MainFilter = ({ title }: ButtonProps) => {
  return (
    <MainButton>
      <Sort size={14} color={colors.text._primary} />
      <Text size={14} color={colors.text._primary} weight={'SemiBold'} style={{marginLeft: 4}}>{title}</Text>
    </MainButton>
  );
};

export const MainButton = styled.View`
  flex-direction: row;
  align-items:center;
  padding: 8px 12px;
  background-color: white;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${colors.green._100};
  ${Platform.OS === 'android' ? 'elevation: 8;' :'box-shadow: 0px 0px 4px rgba(2, 72, 38, 0.15);'};
`;


interface SubButtonProps {
  title: string;
  acitve?: boolean;
}

export const SubFilter = ({ title, acitve }: SubButtonProps) => {
  let IconComponent;

  switch (title) {
    case '타임세일':
      IconComponent = Bell;
      break;
    case '연계세일':
      IconComponent = Partnership;
      break;
    case '단골가게':
      IconComponent = Star;
      break;
    case '초기화':
      IconComponent = Reset;
      break;
    default:
      throw new Error(`Unknown icon type: ${title}`);
  }
  return (
    <SubButton isActive={acitve}>
      <IconComponent size={14} color={colors.text._primary} />
      <Text size={14} color={colors.text._primary} weight={acitve ? 'Medium' : 'Regular'} style={{marginLeft: 4}}>{title}</Text>
    </SubButton>
  );
};

export const SubButton = styled.View<{ isActive?: boolean }>`
  flex-direction: row;
  align-items:center;
  padding: 8px 12px;
  margin-right: 8px;
  background-color: ${(props) => (props.isActive ? 'rgba(230, 240, 235, 0.7)' : colors.white._100)};
  border-radius: 20px;
  border-width: 1px;
  border-color: ${(props) => (props.isActive ? colors.green._50 : colors.white._300)};
`

interface GradientProps {
  title: string;
  c1: string;
  c2: string;
  textColor: string;
}

export const GradientButton = ({ title, c1, c2, textColor }: GradientProps) => {

  let IconComponent;

  switch (title) {
    case '모든 쿠폰 보기':
      IconComponent = Coupon;
      break;
    case '제휴 가게 보기':
      IconComponent = Puzzle;
      break;
    default:
      throw new Error(`Unknown icon type: ${title}`);
  }
  
  return (
    <Svg width="162" height="44" viewBox="0 0 162 44" fill="none" >
      <Rect width="162" height="44" rx="8" fill="url(#paint0_linear_222_2339)"/>
      <Rect x="1" y="1" width="160" height="42" rx="7" stroke="url(#paint1_linear_222_2339)" strokeOpacity="0.5" strokeWidth="2"/>
      <Defs>
      <LinearGradient id="paint0_linear_222_2339" x1="162" y1="22" x2="2.74476e-07" y2="22" gradientUnits="userSpaceOnUse">
        <Stop stopColor={c1} stopOpacity="0.1"/>
        <Stop offset="1" stopColor={c2} stopOpacity="0.1"/>
      </LinearGradient>
      <LinearGradient id="paint1_linear_222_2339" x1="167" y1="17" x2="-8.5" y2="22" gradientUnits="userSpaceOnUse">
        <Stop stopColor={c1}/>
        <Stop offset="1" stopColor={c2} stopOpacity="0.57"/>
      </LinearGradient>
      </Defs>
      <GradientBox >
          <IconComponent size={20} color={textColor} />
          <Text size={16} weight={"Bold"} color={textColor} style={{marginLeft: 10}}>{title}</Text>
      </GradientBox>
    </Svg>
  );
};

const GradientBox = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: transparent;
`

export default { SaleTag, MainFilter,SubFilter, GradientButton};
