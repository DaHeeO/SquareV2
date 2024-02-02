import React, {useState} from 'react';
import styled from 'styled-components/native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

// styled
import {Text} from '../common/fonts';
import {colors} from '../common/globalStyles';

// icon
import Down from '../../assets/icons/Down';

// component
import LocationChgModal from './modal/LocationChgModal';

const LocationChange = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const rotation = useSharedValue(0);
  const [location, setLocation] = useState('덕명동');

  const onLocationChange = (location: string) => {
    setLocation(location)
  };

  const openModal = () => {
    setModalVisible(true);
    changeDegree();
  };

  const closeModal = () => {
    setModalVisible(false);
    changeDegree();
  };

  const changeDegree = () => {
    rotation.value = withTiming(rotation.value === 0 ? 180 : 0, {
      duration: 200,
      easing: Easing.inOut(Easing.ease),
    });
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <LocationDiv onPress={openModal}>
      <Text 
      size={24} 
      color={colors.text._primary} 
      weight={'SemiBold'}
      style={{marginRight: 4}}
      >
      {location}
      </Text>
      <Animated.View style={animatedStyle}>
        <Down size={24} color={colors.text._primary} />
      </Animated.View>
      {/* 위치 설정 모달 */}
      <LocationChgModal
        onLocationChanged={onLocationChange}
        initialLocation={location}
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
    </LocationDiv>
  );
};

const LocationDiv = styled.Pressable`
  align-items: center;
  flex-direction: row;
`

export default LocationChange;
