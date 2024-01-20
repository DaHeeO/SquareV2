import React, { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';

// component

// styled
import * as S from './CurLocation.styles';
import {Text} from '../../components/common/fonts';
import {colors} from '../../components/common/globalStyles';

// icon
import Left from '../../assets/icons/Left';

// image
import Target from '../../assets/images/target.png';

const CurLocation = ({ navigation }: any) => {

    const [latitude, setLatitude] = useState('');
    const [longtitude, setLongtitude] = useState('');

    const geoLocation = () => {
      Geolocation.getCurrentPosition(
        position => {
          const latitude = JSON.stringify(position.coords.latitude);
          const longtitude = JSON.stringify(position.coords.longitude);

          setLatitude(latitude);
          setLongtitude(longtitude);

          console.log("latitude", position.coords.latitude);
          console.log("longtitude", position.coords.longitude);
        },
        error => {
          console.log(error.code, error.message);

        }
      )
    }
  
  useEffect(() => {
    geoLocation();
  }, []);


  return (
    <S.Container>
      <S.Top>
        <S.IconDiv onPress={() => navigation.pop()}>
          <Left  color={colors.text._primary} size={24}/>
        </S.IconDiv>
        <Text size={18} color={colors.text._primary} weight={'SemiBold'}>지도에서 지역 확인</Text>
        {/* 이거 그냥 비율 맞추려고 넣은거니깐 삭제하지 마세요 */}
        <Left  color={'transparent'} size={24} />
      </S.Top>
      {/* 지도 */}
      <S.Map>
        {/* <KakaoMap/> */}
      </S.Map>
      <S.Bottom>
        <Text 
        size={20} 
        color={colors.text._primary} 
        weight={'Bold'}
        style={{marginTop: 20}}
        >대전광역시 유성구 봉명동
        </Text>
        <S.Description>
          <S.Img source={Target} />
          <S.TextBox>
            <Text 
            size={15} 
            color={colors.text._primary} 
            weight={'Regular'}
            >
              현재 동네를 기준으로 근처에 위치한 가게들을 볼 수 있어요. {'\n'}
              스퀘어는 최대 4개의 동네 설정이 가능합니다. {'\n'}
              동네 변경, 추가를 원하신다면 설정에서 변경 하실 수 있습니다.
            </Text>
          </S.TextBox>
        </S.Description>
        <S.Button onPress={() => navigation.reset({routes: [{name: 'Login'}]})}>
        <Text 
        size={16} 
        color={'white'} 
        weight={'Bold'}
        >
          현재 지역으로 설정
        </Text>
      </S.Button>
      </S.Bottom>
    </S.Container>
  );
};

export default CurLocation;
