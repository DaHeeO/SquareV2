import React from 'react';
import {View } from 'react-native';

// style
import * as S from './StoreDetail.styles';

// component
import MainHeaderAnimated from '../../components/common/MainHeaderAnimated';

const StoreDetail = ({navigation} : any) => {
  const popBack = () => {
    navigation.pop();
  };

  const navigateToHome = () => {
    navigation.navigate('MainStack', { screen: 'Main' });
  };

  const navigateToCart = () => {
    navigation.navigate('FullScreenStack', { screen: 'Store' });
  };


  return (
    <S.Container>
      <MainHeaderAnimated
        onPopBack={popBack}
        onNavigateToHome={navigateToHome}
        onNavigateToCart={navigateToCart}
        title={''}
      />
    </S.Container>
  );
};


export default StoreDetail;
