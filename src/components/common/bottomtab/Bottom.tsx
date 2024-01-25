import React, {useState} from 'react';

// styled
import * as S from './Bottom.styles';
import {Text} from '../fonts';
import {colors} from '../globalStyles';

// component 
import Icon from './BottomtabIcon';

interface comp {

}

const Bottom = (comp: any) => {

 
  return (
    <S.Bottom>
        <Icon focused={false} type='map'/>
        <Icon focused={false} type='pickup'/>
        <Icon focused={true} type='home'/>
        <Icon focused={false} type='dib'/>
        <Icon focused={false} type='my'/>
    </S.Bottom>
  );
};

export default Bottom;
