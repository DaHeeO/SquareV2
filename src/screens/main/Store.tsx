import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

// style
import styled from 'styled-components/native';

// component
import { ListInterface, ListingData } from '../../components/main/ListingData';
import MainHeader from '../../components/common/MainHeader';
import CategoryHeader from '../../components/main/CategoryHeader';
import StoreList from '../../components/main/StoreList';
import StoreFilter from '../../components/main/StoreFilter';

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

  const navigateToDetail = (id: number) => {
    navigation.navigate('StoreDetail', {id});
  }

  const [category, setCategory] = useState<number>(route.params?.category || '1');
  const [mainFilter, setMainFilter] = useState('기본순');
  const [subFilters, setSubFilters] = useState([false, false, false]);
  const items = useMemo(() => ListingData.data as any, []);
  const screenWidth = Dimensions.get('window').width/2;

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
      } else if(prevCategoryRef.current > newCategory) {
        offset.value = -screenWidth;
      }
    }

    prevCategoryRef.current = newCategory;

    setCategory(newCategory);

    offset.value = withTiming(0, { duration: 300 });
  };

  const onFiltersChanged = (MainFilter: string, SubFilters: any) => {
    setMainFilter(MainFilter);
    setSubFilters(SubFilters);
  };

  useEffect(() => {
    console.log('item 갱신');

  }, [category, mainFilter, subFilters]);


  return (
    <Container>
      <MainHeader
        onPopBack={popBack}
        onNavigateToHome={navigateToHome}
        onNavigateToCart={navigateToCart}
        title={'스퀘어 픽업'}
      />
      <CategoryHeader onCategoryChanged={onDataChanged} initialCategory={category} />
      <StoreFilter onFilterChanged={onFiltersChanged}/>
      <Animated.View style={[animationStyles.swipeContainer, swipe]}>
        <StoreList listing={items} category={category} onNavigateToDetail={navigateToDetail} />
      </Animated.View>
    </Container>
  );
};

const animationStyles = StyleSheet.create({
  swipeContainer: {
    width: '100%',
    flex: 1,
  }
});

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
`

export default Store;
