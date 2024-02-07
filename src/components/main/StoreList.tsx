import React, { useEffect, useRef } from 'react';
import { Image, View } from 'react-native';

// styled
import styled from 'styled-components/native';
import {colors} from '../common/globalStyles';
import {Text} from '../common/fonts';

// component
import { ListInterface } from './ListingData';
import { FlatList } from 'react-native-gesture-handler';
import StoreSquare from '../../assets/images/StoreSquare.png';
import StarFilled from '@/assets/icons/StarFilled';
import Buttons from '../common/Buttons';

// 부모 컴포넌트 프롭스
interface ListProps {
  onNavigateToDetail: (id: number, info: ListInterface) => void;
  listing: any[];
  category: number;
}

const StoreList = ({listing, category, onNavigateToDetail}: ListProps) => {

  const listRef = useRef<FlatList>(null); 

  useEffect(() => {
  }, [category]);

  const renderItem = (item: ListInterface) => {

    const truncatedProduct = `${item.product.substring(0, 17)}...`;
    return (
      <StoreConatiner  onPress={() => {
        onNavigateToDetail(item.id, item);
      }}>
        <StoreImage source={item.image === null ? StoreSquare : item.image} />
        {/* 오른쪽 */}
        <View>
          <Text size={16} color={colors.text._primary} weight={'SemiBold'}>{item.name}</Text>
          <StoreInfo style={{marginTop: 2}}>
            <StarFilled size={16} color={colors.yellow._400} />
            <Text size={14} color={colors.text._primary} weight={'Medium'} style={{marginLeft: 2}}>{item.rating}</Text>
            <Text size={14} color={colors.text._primary} weight={'Regular'} style={{marginLeft: 4}}>{'('}{item.review_cnt}{')'}</Text>
            <Text 
            size={14} 
            color={colors.text._secondary} 
            weight={'Regular'} 
            numberOfLines={1} 
            ellipsizeMode="tail" 
            style={{marginLeft: 4}}
            >{truncatedProduct}</Text>
          </StoreInfo>
          <StoreInfo style={{marginTop: 6}}>
            {item.is_ts ? <Buttons.SaleTag title='타임세일' textColor={colors.orange._500} bgColor={colors.orange._50}/> : null}
            {item.is_pn ? <Buttons.SaleTag title='연계세일' textColor={colors.red._300} bgColor={colors.red._50}/> : null}
          </StoreInfo>
        </View>
      </StoreConatiner>
    );
  };

  return (
    <Container>
      <FlatList 
        renderItem={(data) => renderItem(data.item)}
        ref={listRef}
        data={listing}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`

const StoreConatiner = styled.Pressable`
  padding: 12px 24px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.white._200};
`

const StoreImage = styled(Image)`
  width: 75px;
  height: 75px;
  margin-right: 12px;
  border-radius: 5px;
  border-width: 1px;
  border-color: rgba(17, 17, 17, 0.1);
`;

const StoreInfo = styled.View`
  flex-direction: row;
  align-items: center;
`
export default StoreList;
