import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

const StoreList = () => {
  const translateX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: (event) => {
      // 스와이프가 화면의 40% 이상이면 다음 페이지로 이동
      if (Math.abs(event.translationX) > 0.4 * screenWidth) {
        translateX.value = withSpring(
          event.translationX > 0 ? screenWidth : -screenWidth
        );
      } else {
        // 스와이프가 화면의 40% 미만이면 초기 위치로 되돌림
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      <Animated.View style={[styles.page, { backgroundColor: 'lightblue'}, animatedStyle]}>
        <Text style={styles.text}>페이지 1</Text>
        {/* 추가 내용 */}
      </Animated.View>

      <Animated.View
        style={[styles.page, { backgroundColor: 'lightcoral' }, animatedStyle]}
      >
        <Text style={styles.text}>페이지 2</Text>
        {/* 추가 내용 */}
      </Animated.View>

      <Animated.View
        style={[styles.page, { backgroundColor: 'lightgreen' }, animatedStyle]}
      >
        <Text style={styles.text}>페이지 3</Text>
        {/* 추가 내용 */}
      </Animated.View>

      {/* 추가 페이지들 */}
    </ScrollView>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  page: {
    width: screenWidth,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default StoreList;
