import React, { useEffect } from 'react';

// style
import * as S from './StoreDetail.styles';

// component
import MainHeaderAnimated from '../../components/common/MainHeaderAnimated';
import BannerCarousel from '../../components/main/BannerCarousel';
import { ListInterface, StoreInterface, StoreData } from 'src/components/main/ListingData';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const StoreDetail = ({ route, navigation }: any) => {
  const storeId = route.params.id || 0;
  const info: ListInterface = route.params?.info;

  useEffect(() => {
    console.log('detail item id: ', storeId);
    console.log([info]);
    // 여기서 아이템 로딩 api
  }, [info, storeId]);

  const popBack = () => {
    navigation.pop();
  };

  const navigateToHome = () => {
    navigation.navigate('MainStack', { screen: 'Main' });
  };

  const navigateToCart = () => {
    navigation.navigate('FullScreenStack', { screen: 'Store' });
  };

  const scrollY = useSharedValue(0);

  const onScroll = ((event: any) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
    console.log(scrollY.value);
  });

  const bannerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 520],
        [260, 0],
        Extrapolation.CLAMP // 스크롤 범위를 넘어가면 클램프
      ),
    };
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainHeaderAnimated
        onPopBack={popBack}
        onNavigateToHome={navigateToHome}
        onNavigateToCart={navigateToCart}
        title={''}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={true}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        <Animated.View style={[ bannerStyle ]}>
          <BannerCarousel />
        </Animated.View>
        {/* 나머지 정보 및 메뉴 등 추가 */}
        <View style={{ backgroundColor: 'lightblue', height: 260 }} />
        <View style={{ backgroundColor: 'lightgreen', height: 260 }} />
        <View style={{ backgroundColor: 'tomato', height: 260 }} />
        <View style={{ backgroundColor: 'lightblue', height: 260 }} />
        <View style={{ backgroundColor: 'lightblue', height: 260 }} />
        <View style={{ backgroundColor: 'lightblue', height: 260 }} />
        <View style={{ backgroundColor: 'lightblue', height: 260 }} />
        <View style={{ backgroundColor: 'lightblue', height: 260 }} />
        <View style={{ backgroundColor: 'lightblue', height: 260 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreDetail;