import { StyleSheet, ScrollView, TouchableOpacity, Pressable, LayoutChangeEvent, TouchableWithoutFeedback } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

import styled from 'styled-components/native';
import { Text } from '../common/fonts';
import { colors } from '../common/globalStyles';

const categories = [
  {
    id: 0,
    name: '전체',
  },
  {
    id: 1,
    name: '한식',
  },
  {
    id: 2,
    name: '중식/일식',
  },
  {
    id: 3,
    name: '패스트푸드',
  },
  {
    id: 4,
    name: '카페/베이커리',
  },
];

interface Props {
  onCategoryChanged: (category: number) => void;
  initialCategory: number;
}

const CategoryHeader = ({ onCategoryChanged, initialCategory }: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(initialCategory);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);

  const onScrollViewLayout = (event: LayoutChangeEvent) => {
    setScrollViewWidth(event.nativeEvent.layout.width);
  };

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);

    if (selected) {
      selected.measure((x, y, width, height, pageX, pageY) => {
        const categoryWidth = width;
        const offsetX = Math.max(0, pageX - scrollViewWidth / 2 + categoryWidth / 2);

        scrollRef.current?.scrollTo({
          x: offsetX,
          y: 0,
          animated: true,
        });
      });
    }

    onCategoryChanged(categories[index].id);
  };

  return (
    <Container>
      <ScrollView
        horizontal
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          gap: 30,
          paddingHorizontal: 24,
        }}
        onLayout={onScrollViewLayout} // Added onLayout callback
      >
        {categories.map((item, index) => (
          <CategoryItem
            ref={(el) => (itemsRef.current[index] = el)}
            key={index}
            onPress={() => selectCategory(index)}>
            <CategoryItemContainer selected={activeIndex === index}>
              <Text
                size={16}
                color={colors.text._primary}
                weight={activeIndex === index ? 'SemiBold' : 'Regular'}>
                {item.name}
              </Text>
            </CategoryItemContainer>
          </CategoryItem>
        ))}
      </ScrollView>
    </Container>
  );
};

export const Container = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 5px;
  border-bottom-color: ${colors.white._500};
  border-bottom-width: 1px;
`;

const CategoryItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CategoryItemContainer = styled(Animated.View)<{ selected: boolean }>`
  padding-bottom: ${(props) => (props.selected ? '6px' : '8px')};
  border-bottom-width: ${(props) => (props.selected ? '2px' : '0')};
  border-bottom-color: ${colors.green._500};
`;

export default CategoryHeader;
