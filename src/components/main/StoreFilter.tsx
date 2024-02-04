import { ScrollView, TouchableOpacity, LayoutChangeEvent, View, Pressable } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import Animated from 'react-native-reanimated';

import styled from 'styled-components/native';
import { Text } from '../common/fonts';
import { colors } from '../common/globalStyles';

// component
import Buttons from '../common/Buttons';
import FilterChgModal from './modal/FilterChgModal'

interface Props {
  onFilterChanged: (MainFilter: string, subFilters: any) => void;
}

const subFilter = [
  {
    name: '타임세일',
  },
  {
    name: '연계세일',
  },
  {
    name: '단골가게',
  }
];

const StoreFilter = ({onFilterChanged}: Props) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState('기본순');
  const [sub, setSub] = useState([false, false, false]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onFilterChange = (filter: string) => {
    setFilter(filter)
  };

  const selectFilter = (index: number) => {
    setSub(prevSub => {
      const updatedSub = [...prevSub];
      updatedSub[index] = !updatedSub[index];
      return updatedSub;
    });
  }

  useEffect(() => {
    const handleChange = async () => {
      onFilterChanged(filter, sub);
    };

    handleChange();
  }, [filter, sub, onFilterChanged]);

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
        {subFilter.map((item, index) => (
          <Pressable key={index} onPress={() => selectFilter(index)}>
            <Buttons.SubFilter 
            title={item.name} 
            acitve={sub[index]}
            />
          </Pressable>
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
