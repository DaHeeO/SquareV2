import React, { useState } from 'react';
import { Image, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../common/globalStyles';
import { Text } from '../common/fonts';


// component
import { CouponInterface } from './ListingData';
import { SaleTag } from '../common/Buttons';
import Logo from '@/assets/images/Logo.jpeg';
import Product from '@/assets/images/cafeBanner2.jpeg';


interface ButtonProps {
  item: CouponInterface;
}

function dateFormat(date: string): string {
  const newDate = new Date(date);
  const year = newDate.getFullYear() % 100; // 년도의 뒤 2자리만 사용
  const month = newDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
  const day = newDate.getDate();

  // 각 부분이 한 자리 숫자일 경우 앞에 0을 추가하여 두 자리로 만듦
  const formattedYear = year < 10 ? `0${year}` : `${year}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;

  // 날짜 포맷팅
  const formattedDate = `${formattedYear}.${formattedMonth}.${formattedDay}`;

  return formattedDate;
}

export const PromotionCoupon = ({ item }: ButtonProps) => {

  const [componentHeight, setComponentHeight] = useState(0);

  const onLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setComponentHeight(height - 20);
  };

  return (
    <CouponContainer onLayout={onLayout}>
    <LeftDiv>
      <AffiliateInfoDiv>
        <SaleTag title='가게 전용' textColor={colors.orange._600} bgColor={colors.orange._50} marginRight={4}/>
        <Text size={15} color={colors.orange._600} weight={'Bold'} > {item.discount_price}원 할인 쿠폰</Text>
      </AffiliateInfoDiv>
      <LineDiv color={colors.orange._400} />
      <Text size={14} color={colors.text._primary} weight={'SemiBold'} style={{marginTop: 6}}>{'['}{item.product.name}{']'} 포함 {item.standard_price}원 구매시 {item.discount_price}원 할인 쿠폰 발급</Text>
      <Text size={10} color={colors.text._secondary} weight={'Regular'} style={{marginTop: 10}} >{dateFormat(item.started_at)} ~ {dateFormat(item.finished_at)}</Text>
    </LeftDiv>
    <RightDiv color={colors.orange._400}>
    </RightDiv>
    <ProductDiv>
      <ProductImage height={componentHeight} source={item.product.image === null ? Product : item.product.image} />
    </ProductDiv>
  </CouponContainer>
  );
};


export const AffiliateCoupon = ({ item }: ButtonProps) => {

  const [componentHeight, setComponentHeight] = useState(0);

  const onLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setComponentHeight(height - 20);
  };

  return (
    <CouponContainer onLayout={onLayout}>
      <LeftDiv>
        <AffiliateInfoDiv>
          <StoreImage source={item.store.image === null ? Logo : item.store.image} />
          <Text size={14} color={colors.green._600} weight={'SemiBold'} >{'['}{item.store.name}{']'}</Text>
          <Text size={15} color={colors.green._600} weight={'Bold'} > {item.discount_price}원 할인 쿠폰</Text>
        </AffiliateInfoDiv>
        <LineDiv color={colors.green._400} />
        <Text size={14} color={colors.text._primary} weight={'SemiBold'} style={{marginTop: 6}}>{'['}{item.product.name}{']'} 포함{'\n'}{item.standard_price}원 구매시 </Text>
        <AffiliateInfoDiv style={{justifyContent: 'space-between', marginTop: 10}}>
          <Text size={10} color={colors.text._secondary} weight={'Regular'} >{dateFormat(item.started_at)} ~ {dateFormat(item.finished_at)}</Text>
          <Pressable>
            <Text size={12} color={colors.text._primary} weight={'Regular'} >제휴가게 바로가기 {'>'}</Text>
          </Pressable>
        </AffiliateInfoDiv>
      </LeftDiv>
      <RightDiv color={colors.green._400}>
      </RightDiv>
      <ProductDiv>
        <ProductImage height={componentHeight} source={item.product.image === null ? Product : item.product.image} />
      </ProductDiv>
    </CouponContainer>
  );
};

const CouponContainer = styled.View`
  flex: 1
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.white._500};
  margin-bottom: 20px;
  flex-direction: row;
`;

const LeftDiv = styled.View`
  flex: 1;
  padding: 10px 30px 10px 10px;
`;

const AffiliateInfoDiv = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const StoreImage = styled(Image)`
  width: 20px;
  height: 20px;
  border-radius: 4px
  margin-right: 6px;
`;

export const LineDiv = styled.View<{color: string}>`
  margin-top: 6px;
  width: 100%;
  border-width: 0.5px;
  border-color: ${(props) => (props.color)};
  background-color: ${(props) => (props.color)};
`;

const RightDiv = styled.View<{color: string}>`
  width: 70px;
  background-color: ${(props) => (props.color)};
  border-width: 1px;
  border-color: ${(props) => (props.color)};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const ProductDiv = styled.View`
  position: absolute;
  height: 100%;
  right: 10px;
  justify-content: center;
`;

export const ProductImage = styled(Image)<{height: number}>`
  width: 80px;
  height: ${(props) => (props.height)}px;
  border-radius: 8px
`;



export default { PromotionCoupon, AffiliateCoupon };
