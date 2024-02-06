import React from 'react';
import { View } from 'react-native';

// styled
import * as S from './StoreInfo.styles';
import {colors} from '../common/globalStyles';
import {Text} from '../common/fonts';

// image, icon
import StoreSquare from '@/assets/images/StoreSquare.png';
import Logo from '@/assets/images/Logo.jpeg';
import StarFilled from '@/assets/icons/StarFilled';
import Right from '@/assets/icons/Right';

// component
import { StoreInterface } from './ListingData';
import LineVertical from '@/assets/icons/LineVertical';
import InfoLocation from './InfoLocation';
import { CopyButton } from '../common/Buttons';


interface Props {
  info: StoreInterface;
  onNavigateToLocation: () => void;
}


const StoreInfo = ({info, onNavigateToLocation}: Props) => {

  return (
    <S.Container>
        {/* 카페 이미지 */}
        <S.ImageDiv>
            <S.StoreImage source={info.image === null ? Logo : info.image} />
        </S.ImageDiv>
      <Text size={26} color={colors.text._primary} weight={'Bold'}>{info.name}</Text>
      {/* 리뷰 태그 */}
      <S.ReviewDiv>
        <S.ReviewBox>
          <StarFilled size={20} color={colors.yellow._400} stroke={colors.text._primary}/>
          <Text 
          size={16} 
          color={colors.text._primary} 
          weight={'SemiBold'}
          style={{marginLeft: 4}}
          >
            {info.rating}
          </Text>
        </S.ReviewBox>
        <LineVertical size={15} color={colors.white._600} />
        <S.ReviewBox>
          <Text size={16} color={colors.text._primary} weight={'SemiBold'}>리뷰</Text>
          <Text 
          size={16} 
          color={colors.text._primary} 
          weight={'SemiBold'}
          style={{marginLeft: 4}}
          >
            {info.rating}
          </Text>
          <Right size={20} color={colors.text._primary} />
        </S.ReviewBox>
      </S.ReviewDiv> 
      {/* 네모 가게 정보 */}
      <S.DetailInfo>
        <S.DetailDiv style={{marginBottom: 10}}>
          <Text size={14} color={colors.text._primary} weight={'Medium'}>가게 위치</Text>
          <S.TextBox>
            <Text size={14} color={colors.text._primary} weight={'Medium'}>{info.address}{info.address}</Text>
            <Text size={14} color={colors.text._primary} weight={'Regular'}>{'('}덕명동{')'}</Text>
            <Text size={14} color={colors.text._primary} weight={'Regular'}>{'('}현재 위치에서 약 {info.distance}m, 도보 {info.duration}분{')'}</Text>
            {/* 지도 구역 */}
            <InfoLocation storeInfo={info} onNavigateToLocation={onNavigateToLocation}/>
          </S.TextBox>
        </S.DetailDiv>
        <S.DetailDiv>
          <Text size={14} color={colors.text._primary} weight={'Medium'}>픽업 시간</Text>
          <S.TextBox>
            <Text size={14} color={colors.text._primary} weight={'Medium'}>약 {info.pickup_time}분 소요</Text>
          </S.TextBox>
        </S.DetailDiv>
      </S.DetailInfo>
    </S.Container>
  );
};

export default StoreInfo;
