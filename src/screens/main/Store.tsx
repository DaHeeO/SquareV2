import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import * as S from './Store.styles';
import MainHeader from '../../components/common/MainHeader';
import CategoryHeader from '../../components/main/CategoryHeader';
import StoreList from '../../components/main/StoreList';
import { ListingData } from '../../components/main/ListingData';

const Store = ({ route, navigation }: any) => {
  const popBack = () => {
    navigation.pop();
  };

  const navigateToHome = () => {
    navigation.navigate('MainStack', { screen: 'Main' });
  };

  const navigateToCart = () => {
    navigation.navigate('FullScreenStack', { screen: 'Store' });
  };

  const [category, setCategory] = useState<number>(route.params?.category || '1');
  const items = useMemo(() => ListingData.data as any, []);
  const screenWidth = Dimensions.get('window').width;

  const offset = useSharedValue(0);
  const prevCategoryRef = useRef<number | null>(category);

  const swipe = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const onDataChanged = (newCategory: number) => {
    if (prevCategoryRef.current !== null) {
      // Compare with the previous category
      if (prevCategoryRef.current < newCategory) {
        offset.value = screenWidth;
      } else {
        offset.value = -screenWidth;
      }
    }

    // Update the previous category
    prevCategoryRef.current = newCategory;

    // Set the new category immediately
    setCategory(newCategory);

    // Use withTiming for a smooth linear animation
    offset.value = withTiming(0, { duration: 400 });
  };

  return (
    <S.Container>
      <MainHeader
        onPopBack={popBack}
        onNavigateToHome={navigateToHome}
        onNavigateToCart={navigateToCart}
        title={'스퀘어 픽업'}
      />
      <CategoryHeader onCategoryChanged={onDataChanged} initialCategory={category} />
      <Animated.View style={[animationStyles.swipeContainer, swipe]}>
        <StoreList listing={items} category={category} />
      </Animated.View>
    </S.Container>
  );
};


const animationStyles = StyleSheet.create({
  swipeContainer: {
    width: '100%',
    flex: 1,
  }
});
export default Store;
