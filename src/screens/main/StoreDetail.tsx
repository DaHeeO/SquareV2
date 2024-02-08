import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

// style

// component
import { ListInterface, StoreInterface, StoreData } from '../../components/main/ListingData';
import MainHeaderAnimated from '../../components/common/MainHeaderAnimated';
import BannerCarousel from '../../components/main/BannerCarousel';
import StoreInfo from '../../components/main/StoreInfo';
import CouponModal from '../../components/main/modal/CouponModal';


const StoreDetail = ({ route, navigation }: any) => {

  // parmas로 아이디 받아와서 item 렌더링
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const storeId = route.params.id || 0;
  const info: ListInterface = route.params?.info;
  const items = useMemo(() => StoreData.data as any, []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // 여기서 아이템 로딩 api
  }, [info, storeId]);


  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);


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

  const navigateToLocation = () => {
    navigation.navigate('StoreLocation', {latitude: items.lat, longitude: items.long, name: items.name});
  };

  // scroll event
  const scrollY = useSharedValue(0);
  const bannerRef = useRef(null);

  const onScroll = ((event: any) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
    const index = scrollY.value / 230;
    setActiveIndex(index);
  });

  const bannerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value * 2,
        [0, 780],
        [260, 0], // Adjust the minimum height as needed
        Extrapolation.CLAMP
      ),
    }
  });

  return (
    <BottomSheetModalProvider>
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
          <StoreInfo info={items} onNavigateToLocation={navigateToLocation} modalhandler={handlePresentModalPress}/>
          <View style={{height: 10000}}></View>
        </ScrollView>
        <CouponModal bottomSheetModalRef={bottomSheetModalRef}/>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default StoreDetail;