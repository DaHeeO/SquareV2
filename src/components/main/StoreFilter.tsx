import { ScrollView, TouchableOpacity, LayoutChangeEvent, View, Pressable } from 'react-native';
import { useRef, useState } from 'react';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';
import { Text } from '../common/fonts';
import { colors } from '../common/globalStyles';

// component
import Buttons from '../common/Buttons';
import FilterChgModal from './modal/FilterChgModal'

const subFilters = [
  {
    name: '타임세일',
    active: false,
  },
  {
    name: '연계세일',
    active: false,
  },
  {
    name: '단골가게',
    active: false,
  }
]


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
      <Pressable onPress={openModal} >
        <Buttons.MainFilter title={filter}/>
      </Pressable>
      <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 8,
      }}
      >
        {subFilters.map((item, index) => (
          <Buttons.SubFilter 
          title={item.name} 
          acitve={item.active}
          key={index}
          />
        ))}
      </ScrollView>
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
  padding: 10px 0px 10px 12px;
`


export default StoreFilter;
