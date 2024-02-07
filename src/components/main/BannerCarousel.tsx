// ScrollViewCarousel.tsx
import styled from 'styled-components/native';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View, Dimensions, Image, Pressable, TouchableOpacity } from 'react-native';
import { Text } from '../common/fonts';
import { colors } from '../common/globalStyles';

const BannerCarousel = () => {
  const flatListRef = useRef<FlatList>(null);
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  const Banner = [
    { id: 1, image: require('../../assets/images/cafeBanner1.jpeg') },
    { id: 2, image: require('../../assets/images/cafeBanner2.jpeg') },
    { id: 3, image: require('../../assets/images/cafeBanner3.jpeg') },
    { id: 4, image: require('../../assets/images/cafeBanner4.jpeg') },
  ];

  useEffect(() => {
    if (Banner.length > 1) {
      let interval = setInterval(() => {
        if (activeIndex === Banner.length - 1) {
          flatListRef.current?.scrollToIndex({
            index: 0,
            animated: true,
          });
        } else {
          flatListRef.current?.scrollToIndex({
            index: activeIndex + 1,
            animated: true,
          });
        }
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [activeIndex, Banner]);

  const getItemLayout = (data: any, index: number) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const renderItem = (item: any) => {
    return (
      <View>
        <Image source={item.image} style={{ height: 260, width: screenWidth }} />
      </View>
    );
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={Banner}
        renderItem={(data) => renderItem(data.item)}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
      <IndicatorBox>
        <Text size={12} color="white" weight="Regular">
          {activeIndex + 1} / {Banner.length}
        </Text>
      </IndicatorBox>
    </View>
  );
};

const IndicatorBox = styled.Pressable`
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 50px;
  padding: 4px 8px;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 2;
`;

export default BannerCarousel;
