import React, { useEffect, useMemo, useRef, useState } from 'react';

// style
import * as S from './StoreDetail.styles';

// component
import MainHeaderAnimated from '../../components/common/MainHeaderAnimated';
import BannerCarousel from '../../components/main/BannerCarousel';
import { ListInterface, StoreInterface, StoreData } from '../../components/main/ListingData';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const StoreDetail = ({ route, navigation }: any) => {

  // parmas로 아이디 받아와서 item 렌더링
  const storeId = route.params.id || 0;
  const info: ListInterface = route.params?.info;
  const items = useMemo(() => StoreData.data as any, []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    console.log('detail item id: ', storeId);
    console.log([info]);
    // 여기서 아이템 로딩 api
    
  }, [info, storeId]);


  // navigation
  const popBack = () => {
    navigation.pop();
  };

  const navigateToHome = () => {
    navigation.navigate('MainStack', { screen: 'Main' });
  };

  const navigateToCart = () => {
    navigation.navigate('FullScreenStack', { screen: 'Store' });
  };

  // scroll event
  const scrollY = useSharedValue(0);
  const bannerRef = useRef(null);

  const onScroll = ((event: any) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
    const index = scrollY.value / 190;
    setActiveIndex(index);
  });

  const bannerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 780],
        [260, 0], // Adjust the minimum height as needed
        Extrapolation.CLAMP
      ),
    }
  });

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: 'white'}}>
      <MainHeaderAnimated
        onPopBack={popBack}
        onNavigateToHome={navigateToHome}
        onNavigateToCart={navigateToCart}
        title={items.name}
        isTransparent={activeIndex}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={true}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        <Animated.View style={[ bannerStyle ]} ref={bannerRef}>
          <BannerCarousel />
        </Animated.View>
        {/* 나머지 정보 및 메뉴 등 추가 */}
        <View style={{ height: 1000 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreDetail;