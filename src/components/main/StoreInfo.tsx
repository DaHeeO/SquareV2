import React, { useEffect, useState } from 'react';
import { Linking, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

// styled
import * as S from './StoreInfo.styles';
import {colors} from '../common/globalStyles';
import {Text} from '../common/fonts';

// image, icon
import StoreSquare from '@/assets/images/StoreSquare.png';
import Logo from '@/assets/images/Logo.jpeg';
import Star from '@/assets/icons/Star';
import Right from '@/assets/icons/Right';
import Heart from '@/assets/icons/Heart';
import Share from '@/assets/icons/Share';
import Phone from '@/assets/icons/Phone';
import LineVertical from '@/assets/icons/LineVertical';

// component
import { StoreInterface } from './ListingData';
import InfoLocation from './InfoLocation';
import PermissionUtil from '../permission/PermissionUtil';
import { APP_PERMISSION_CODE } from '../permission/PermissionCode';
import {GradientButton} from '../common/Buttons';


interface Props {
  info: StoreInterface;
  onNavigateToLocation: () => void;
  modalhandler: () => void;
}


const StoreInfo = ({info, onNavigateToLocation, modalhandler}: Props) => {

  const [locationPermissionChecked, setLocationPermissionChecked] = useState(false);
  const [lat, setLat] = useState<number>(0);
  const [long, setLong] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    if (!locationPermissionChecked) {
      checkLocation();
      setLocationPermissionChecked(true);
    }
  },[locationPermissionChecked]);

  // 위치 권한 허용 체크
  const checkLocation = async () => {
    try {
      const permissionGranted = await PermissionUtil.cmmReqPermission([...APP_PERMISSION_CODE.location]);
  
      if (permissionGranted) {
        Geolocation.getCurrentPosition(
          position => {
            const currentLat = position.coords.latitude;
            const currentLong = position.coords.longitude;
            setLat(currentLat);
            setLong(currentLong);
            setDistance(Math.round(calculateDistance(currentLat, currentLong, info.lat, info.long)));
          },
          error => {
            console.error('Geolocation error:', error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        console.log('Location permission not granted.');
      }
    } catch (error) {
      console.error('Error checking location permission:', error);
    }
  };
  
  // 위도 경도 차이로 거리 계산
  function calculateDistance(lat1: number, lon1:number, lat2:number, lon2: number) {
    console.log(lat1, lon1, lat2, lon2);
    const R = 6371; // 지구의 반지름 (단위: km)
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000 ; // 거리 (단위: m)
    return distance;
  }

  // 거리가 1000m를 넘으면 km로 변환
  function convertDistanceUnit(distance: number): string {
    return distance >= 1000 ? `${(distance / 1000).toFixed(1)}km` : `${distance.toFixed(0)}m`;
  }

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
          <Star size={20} color={colors.text._primary} fill={colors.yellow._400}/>
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
            {locationPermissionChecked ? (
            <Text size={14} color={colors.text._primary} weight={'Regular'}>
              {'('}현재 위치에서 약 {convertDistanceUnit(distance)}, 도보 {(distance/1.4/60).toFixed(0)}분{')'}
              </Text>
            ) : (
              null
            )}
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
      <S.FunctionContainer>
        <S.FunctionBox onPress={() => Linking.openURL(`tel:${info.phone}`)}>
          <Phone size={20} color={colors.text._primary}/>
          <Text 
          size={16} 
          color={colors.text._primary} 
          weight={'Medium'}
          style={{marginLeft: 4}}
          >
          전화
          </Text>
        </S.FunctionBox>
        <LineVertical size={15} color={colors.white._600}/>
        <S.FunctionBox>
          <Heart size={20} color={colors.text._primary} fill={colors.red._200}/>
          <Text 
          size={16} 
          color={colors.text._primary} 
          weight={'Medium'}
          style={{marginLeft: 4}}
          >
          {info.dibs_count}
          </Text>
        </S.FunctionBox>
        <LineVertical size={15} color={colors.white._600} />
        {/* DeepLinking설정을 통해 https:// 에서 앱으로 이동 가능하다 */}
        <S.FunctionBox>
          <Share size={20} color={colors.text._primary}/>
          <Text 
          size={16} 
          color={colors.text._primary} 
          weight={'Medium'}
          style={{marginLeft: 4}}
          >
          공유
          </Text>
        </S.FunctionBox>
      </S.FunctionContainer>
      <S.FunctionBox style={{justifyContent: 'space-between' ,marginTop: 15, marginBottom: 10}}>
        <S.SaleBox onPress={modalhandler}>
        <GradientButton title='모든 쿠폰 보기' c1='#0EC1E8' c2='#BC0EE8' textColor='#4A1FC5' />
        </S.SaleBox>
        <S.SaleBox>
        <GradientButton title='제휴 가게 보기' c1='#0EC1E8' c2='#BC0EE8' textColor='#4A1FC5' />
        </S.SaleBox>
      </S.FunctionBox>
    </S.Container>
  );
};

export default StoreInfo;
