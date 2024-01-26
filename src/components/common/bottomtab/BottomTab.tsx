import React, {useState} from 'react';

// styled
import * as S from './BottomTab.styles';
import {Text} from '../fonts';
import {colors} from '../globalStyles';

// component 
import Icon from './BottomtabIcon';
import Home from '../../../assets/icons/Home';

interface comp {

}

const BottomTab = (comp: any) => {

 
  return (
    <S.Bottom>
        <Icon focused={true} type='map'/>
        <Icon focused={true} type='pickup'/>
        <Icon focused={true} type='home'/>
        <Icon focused={true} type='dib'/>
        <Icon focused={true} type='my'/>
    </S.Bottom>
  );
};

export default BottomTab;
