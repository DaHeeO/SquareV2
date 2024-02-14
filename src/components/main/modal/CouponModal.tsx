import { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { BottomSheetBackdrop, BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

// styled
import styled from 'styled-components/native';
import { Text } from '../../common/fonts';
import { colors } from '../../common/globalStyles';

// component
import Target from '@/assets/images/target.png';
import { CouponData, CouponInterface } from '../ListingData';
import Down from '@/assets/icons/Down';
import { AffiliateCoupon, PromotionCoupon } from '../Coupon';

interface ModalProps {
  id: number;
  bottomSheetModalRef: any;
}

const CouponModal = ({bottomSheetModalRef, id}: ModalProps) => {

  // variables
  const text = '가게에서 발급 가능한 쿠폰이에요. 모든 쿠폰은 결제 시 자동 발급된답니다. 해당 상품을 구매하시고 쿠폰을 받아보아요😎😎😎 \n\n쿠폰을 누르시면 상품으로 자동 이동 됩니다. 즐거운 쇼핑되세요❤️🧡💛💚💙💜';
  const snapPoints = useMemo(() => ['90%'], []);
  const [showFullText, setShowFullText] = useState(false);
  const rotation = useSharedValue(0);
  const items = useMemo(() => CouponData.data as any, []);

  // 모달 높이 조절
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // 뒷배경 클릭시 닫히게
  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} 
    pressBehavior="close" 
    appearsOnIndex={0}	
    disappearsOnIndex={-1}	
    />,
    [],
  );

  // 노란색 description 조절
  const toggleTextDisplay = () => {
    setShowFullText(!showFullText);
    changeDegree();
  };

  // 텍스트 길이 조절
  const getDescriptionText = () => {
    return showFullText
      ? text
      : text.slice(0, 45) + '...'
  };

  // 화살표 애니메이션
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

  const renderItem = useCallback(
    ({item}: any) => (
      <>
      {item.store.id === id ? 
          <PromotionCoupon item={item} /> 
          : 
          <AffiliateCoupon item={item} />
        }
      </>
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
    >
      <Container>
        <Text size={18} color={colors.text._primary} weight={"SemiBold"}>모든 쿠폰 모아보기</Text>
        <Description onPress={toggleTextDisplay}>
          <Img source={Target} />
          <TextBox>
            <Text 
            size={15} 
            color={colors.text._primary} 
            weight={'Regular'}
            >
             {getDescriptionText()}
            </Text>
          </TextBox>
          <Animated.View style={animatedStyle}>
            <Down size={12} color={colors.text._primary} />
          </Animated.View>
        </Description>
        <BottomSheetFlatList
        data={items}
        keyExtractor={items.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      </Container>
    </BottomSheetModal>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 24px 0px 24px;
`

const Description = styled.Pressable`
  flex-direction: row;
  align-items: flex-start;
  background-color: ${colors.yellow._50};
  padding: 10px 12px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.orange._50}
  margin-top: 20px;
  margin-bottom: 30px;
`

const Img = styled(Image)`
  width: 20px;
  height: 20px;
`;

const TextBox = styled.View`
  flex: 1;
  margin: 0px 10px;
`

export default CouponModal;
