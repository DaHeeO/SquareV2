import { useCallback, useMemo, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

// styled
import styled from 'styled-components/native';
import { Text } from '../../common/fonts';
import { colors } from '../../common/globalStyles';

// component
import Target from '@/assets/images/target.png';
import { CouponData, CouponInterface, StoreLinked } from '../ListingData';
import Down from '@/assets/icons/Down';

interface ModalProps {
    bottomSheetModalRef: any;
}

const CouponModal = ({bottomSheetModalRef}: ModalProps) => {

  // variables
  const text = '가게에서 발급 가능한 쿠폰이에요. 저희 쿠폰은 해당 메뉴를 구매하시면 제휴 가게에서 사용하실 수 있어요. 해당 쿠폰을 클릭하시면 해당 메뉴로 이동된답니다. 메뉴를 구매하시고 쿠폰을 받아보세요😎😎😎 \n 현재 보유하고 계신 쿠폰은 결제 시 사용가능 해요!!!';
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


  const renderItem = (item: CouponInterface) => {

    return (
      <CouponContainer>
        <Text size={18} color={colors.text._primary} weight={"SemiBold"}>{item.name}</Text>
      </CouponContainer>
    );
  };

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
        <FlatList
        renderItem={(data) => renderItem(data.item)}
        data={items}
        showsVerticalScrollIndicator={false}
      />
      </Container>
    </BottomSheetModal>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px 24px 40px 24px;
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

const CouponContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 12px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.white._500};
`

export default CouponModal;
