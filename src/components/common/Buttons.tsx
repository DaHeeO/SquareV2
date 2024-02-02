import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { colors } from './globalStyles';
import { Text } from './fonts';

import Sort from '@/assets/icons/Sort';

interface TopProps {
  title: string;
}

export const SaleTag = ({ title }: TopProps) => {
  return (
    <TopDiv>
        <Text size={10} color={colors.text._primary} weight={'Medium'}>{title}</Text>
    </TopDiv>
  );
};

export const TopDiv = styled.View`
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  background-color: ${colors.green._50};
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

export default { SaleTag, MainFilter };
