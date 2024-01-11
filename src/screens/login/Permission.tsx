import React, { useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import { PERMISSIONS, RESULTS, request } from "react-native-permissions";

// styled 
import * as S from './Permission.styles';
import {Text} from '../../components/common/fonts';
import {colors} from '../../components/common/globalStyles';

// icon
import Notification from '../../assets/icons/Notification';
import Pin from '../../assets/icons/Pin';

//componet
import PermissionDiv from '../../components/Login/PermissionDiv';

const Permission = ({ navigation }: any) => {

  const cmmDevicePlatformCheck = (): boolean => {
    let isUseDevice = true;
    if (Platform.OS !== 'ios' && Platform.OS !== 'android') !isUseDevice;
    return isUseDevice;
  };

  useEffect(() => {
    const cmmReqLocationPermission = async (): Promise<void> => {
      // 모든 권한에 대해 디바이스 플랫폼을 체크합니다. (해당 되지 않는 경우 종료합니다.)
      if (!cmmDevicePlatformCheck()) return;
      const platformPermissions =
        Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
      try {
        // Request Permission
        const result = await request(platformPermissions);

        if (result === RESULTS.GRANTED) {
          console.log('권한이 허용되었습니다.');
        }
      } catch (err) {
        Alert.alert('Location permission err');
        console.warn(err);
      }

      // Display notification alert
      // Alert.alert('Welcome', 'Thank you for launching the app!');
    };

    cmmReqLocationPermission();
  }, []);

  return (
    <S.Container>
      <S.Top>
        <Text size={18} color={colors.text._primary} weight={'SemiBold'}>앱 접근 권한 안내</Text>
      </S.Top>
      <S.Main>
        <Text 
        size={20} 
        color={colors.text._primary} 
        weight={'Bold'}
        style={{marginBottom: 20}}
        >
        SQUARE 서비스 이용을 위해 {'\n'}
        필요한 접근권한 안내입니다.
        </Text>
        <Text 
        size={14} 
        color={colors.text._secondary} 
        weight={'Regular'}
        style={{marginBottom: 20}}
        >
        선택적 접근권한 허용 거부 시 일부 서비스 이용에 {'\n'}
        제한이 있을 수 있습니다. {'\n'}
        접근권한은 [설정 &gt; Square] 에서 변경하실 수 있습니다.
        </Text>
        {/* 필요한 권한 추가 */}
        <PermissionDiv 
        icon={<Pin  color={'#111111'} width={24} height={24} />}
        permission={'위치'}
        isNeccessary={true}
        subText={'매장 위치 확인 및 검색, 주문 등에 사용'}
        />
        <PermissionDiv 
        icon={<Notification  color={'#111111'} width={24} height={24} />}
        permission={'알림'}
        isNeccessary={true}
        subText={'주문 정보 및 공지, 이벤트 알림 시 사용'}
        />
      </S.Main>
      <S.Bottom onPress={() => navigation.reset({routes: [{name: 'Login'}]})}>
      {/* <S.Bottom onPress={() => navigation.navigate('Login')}> */}
        <Text 
        size={16} 
        color={'white'} 
        weight={'Bold'}
        >
          확인
        </Text>
      </S.Bottom>
    </S.Container>
  );
};

export default Permission;
