import { ScrollView, Pressable } from 'react-native';
import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components/native';

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
  },
];

const StoreFilter = ({ onFilterChanged }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState('기본순');
  const [sub, setSub] = useState([false, false, false]);
  const scrollRef = useRef<ScrollView | null>(null);
  
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const selectFilter = (index: number) => {
    setSub((prevSub) => {
      const updatedSub = [...prevSub];
      updatedSub[index] = !updatedSub[index];
      return updatedSub;
    });
  };

  const resetFilter = () => {
    setSub(Array(sub.length).fill(false));
  };

  useEffect(() => {
    const handleChange = async () => {
      onFilterChanged(filter, sub);
    };

    handleChange();
  }, [filter, sub, onFilterChanged]);

  return (
    <Container>
      <Pressable onPress={openModal}>
        <Buttons.MainFilter title={filter} />
      </Pressable>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        contentContainerStyle={{
          alignItems: 'center',
          paddingHorizontal: 8,
        }}
      >
        {sub.some((value) => value) && (
          <Pressable onPress={resetFilter}>
            <Buttons.SubFilter title="초기화" />
          </Pressable>
        )}
        {subFilter.map((item, index) => (
          <Pressable 
            key={index} 
            onPress={() => selectFilter(index)}
          >
            <Buttons.SubFilter title={item.name} acitve={sub[index]} />
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
`;

export default StoreFilter;