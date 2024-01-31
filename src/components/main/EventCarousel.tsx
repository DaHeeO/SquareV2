// ScrollViewCarousel.tsx
import styled from 'styled-components/native';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View, Dimensions, Image, Pressable, TouchableOpacity } from 'react-native';
import { Text } from '../common/fonts';
import { colors } from '../common/globalStyles';

interface EventProps {
  onEventPress: (route: string) => void;
}

const EventCarousel = ({onEventPress}: EventProps) => {
  const flatListRef = useRef<FlatList>(null);
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  const eventData = [
    { id: 1, image: require('../../assets/images/Event1.png') },
    { id: 2, image: require('../../assets/images/Event2.png') },
    { id: 3, image: require('../../assets/images/Event3.png') },
  ];

  // const eventData: string[] = [];

  const navigateToEvent = () => {

  }

  useEffect(() => {
    if (eventData.length > 1) {
      let interval = setInterval(() => {
        // if activeIdx === lastIdx -> jump back to firstIdx
        if (activeIndex === eventData.length - 1) {
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
  }, [activeIndex, eventData]);

  const getItemLayout = (data: any, index: number) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const renderItem = (item: any, index: number) => {
    return (
      <TouchableOpacity onPress={() => {
        onEventPress('Edit')
      }}>
        <Image source={item.image} style={{ height: 110, width: screenWidth }} />
      </TouchableOpacity>
    );
  };

  const handleScroll = (event: any) => {
    // Get the Scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;
    // Get the index of the current active item
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  if (!eventData || eventData.length === 0) {
    return (
      <EmptyLine />
    );
  }

  return (
    <View>
      <FlatList
        data={eventData}
        renderItem={(data) => renderItem(data.item, data.index)}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
      <IndicatorBox onPress={() => {
        onEventPress('Profile');
      }}>
        <Text size={12} color="white" weight="Regular">
          {activeIndex + 1}/{eventData.length} 전체보기
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
  padding: 4px 16px;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 2;
`;

const EmptyLine = styled.View`
  width: 100%;
  height: 5px;
  background-color: ${colors.white._200};
`

export default EventCarousel;
