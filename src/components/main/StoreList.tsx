import React, { useEffect, useRef, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';

// styled
import styled from 'styled-components/native';
import {colors} from '../common/globalStyles';
import {Text} from '../common/fonts';

// component
import { FlatList } from 'react-native-gesture-handler';

// 부모 컴포넌트 프롭스
interface ListProps {
  listing: any[];
  category: number;
}

// item props
interface ListInterface {
  id: number;
  name: string;
  product: string;
  rating: number;
  review_cnt: number;
  is_ts: boolean;
  is_pn: boolean;
  image: any;
}

const StoreList = ({listing, category}: ListProps) => {

  const listRef = useRef<FlatList>(null); 

  useEffect(() => {
    console.log(listing.length);
  }, [category]);

  const renderItem = (item: ListInterface, index: number) => {
    return (
      <StoreConatiner>
        <Text size={12} color='black' weight={'Regular'}>{item.name}</Text>
        <Text size={12} color='black' weight={'Regular'}>{item.id}</Text>
      </StoreConatiner>
    );
  };

  return (
    <Container>
      <FlatList 
        renderItem={(data) => renderItem(data.item, data.index)}
        ref={listRef}
        data={listing}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 0px 24px;
`

const StoreConatiner = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export default StoreList;
