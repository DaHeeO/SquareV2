import React, {useState} from 'react';

// styled
import * as S from './Store.styles';
import { Text } from '../../components/common/fonts';
import {colors} from '../../components/common/globalStyles';

// icon

// component
import MainHeader from '../../components/common/MainHeader';
import CategoryHeader from '../../components/main/CategoryHeader';

const Store = ({route, navigation }: any) => {

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

  const [category, setCategory] = useState<number>(route.params?.category || '1');

  const onDataChanged = (category: number) => {
    setCategory(category);
  };

  return (
    <S.Container>
      <MainHeader
        onPopBack={popBack}
        onNavigateToHome={navigateToHome}
        onNavigateToCart={navigateToCart}
        title={'스퀘어 픽업'}
      />
      <CategoryHeader onCategoryChanged={onDataChanged} initialCategory={category}/>
    </S.Container>
  );
};

export default Store;