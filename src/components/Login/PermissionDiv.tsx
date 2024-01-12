import React from 'react';

// styled
import styled from "styled-components/native";
import {Text} from '../common/fonts';
import {colors} from '../../components/common/globalStyles'

interface comp {
    icon: React.ReactNode;
    permission: string;
    isNeccessary: boolean;
    subText: string;
}

const PermissionDiv = (comp: any) => {

  return (
   <BoxContainer>
        {comp.icon}
        <TextContatiner>
          <TextForm>
            <Text size={16} color={colors.text._primary} weight={'SemiBold'}>
                {comp.permission}
            </Text>
            <Text 
              size={16} 
              color={colors.text._secondary} 
              weight={'Regular'}
              style={{marginLeft: 4}}
              >
               {comp.isNeccessary ? '(필수)' : '(선택)'} 
              </Text>
          </TextForm>
          <Text 
            size={14} 
            color={colors.text._secondary} 
            weight={'Regular'}
            >
              {comp.subText}
          </Text>
        </TextContatiner>
   </BoxContainer>
  );
};

// styled
const BoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 0px;
`
const TextContatiner = styled.View`
  margin-left: 12px;
`

const TextForm = styled.View`
  flex-direction: row;
`

export default PermissionDiv;
