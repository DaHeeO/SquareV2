import React from 'react';

// styled
import * as S from './Store.styles';
import { Text } from '../../components/common/fonts';
import {colors} from '../../components/common/globalStyles';

// icon

// component
import Top from '../../components/common/Top';

const Store = ({navigation}: any) => {

  // top component navigate
  const popBack = () => {
    navigation.pop();
  };

  const navigateToHome = () => {
    navigation.navigate('MainStack', { screen: 'Main' });
  };

  const navigateToCart = () => {
    navigation.navigate('FullScreenStack', {screen:'Store'})
  }

  return (
    <S.Container>
      <Top
        onPopBack={popBack}
        onNavigateToHome={navigateToHome}
        onNavigateToCart={navigateToCart}
        title={'스퀘어 픽업'}
      />
    </S.Container>
  );
};

export default Store;