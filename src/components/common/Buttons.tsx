import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { colors } from './globalStyles';
import { Text } from './fonts';

// icon
import Sort from '@/assets/icons/Sort';
import Bell from '@/assets/icons/Bell';
import Partnership from '@/assets/icons/Partnership';
import Star from '@/assets/icons/Star';
import Reset from '@/assets/icons/Reset';
import CurrentLocation from '@/assets/icons/CurrentLocation';
import { Defs, LinearGradient, Rect, Stop, Svg } from 'react-native-svg';

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

const GradientBackground = styled(Svg)`
  flex: 1;
`;

export const GradientButton = () => {
  return (
    <GradientBackground>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0%" stopColor="#ff8a00" />
          <Stop offset="100%" stopColor="#da1b60" />
        </LinearGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#grad)" />
      {/* 추가적인 내용을 이곳에 배치할 수 있습니다. */}
      <Text size={14} color={colors.text._primary} weight={'Regular'} >Hello, react-native-svg with gradient background!</Text>
    </GradientBackground>
  );
};

export default { SaleTag, MainFilter,SubFilter, GradientButton};
