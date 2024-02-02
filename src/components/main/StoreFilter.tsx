import { ScrollView, TouchableOpacity, LayoutChangeEvent, View, Pressable } from 'react-native';
import { useRef, useState } from 'react';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';
import { Text } from '../common/fonts';
import { colors } from '../common/globalStyles';

// component
import Buttons from '../common/Buttons';
import FilterChgModal from './modal/FilterChgModal'


const StoreFilter = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState('기본순');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onFilterChange = (filter: string) => {
    setFilter(filter)
  };



  return (
    <Container>
      <Pressable onPress={openModal}>
        <Buttons.MainFilter title={filter}/>
      </Pressable>
      {/* scrollView로 감싼 필터들 */}
      <FilterChgModal
        onFilterChanged={onFilterChange}
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 10px 24px;
`

export default StoreFilter;
