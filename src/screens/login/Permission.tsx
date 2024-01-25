import React, { useEffect } from 'react';

// styled 
import * as S from './Permission.styles';
import {Text} from '../../components/common/fonts';
import {colors} from '../../components/common/globalStyles';

// icon
import Notification from '../../assets/icons/Notification';
import Pin from '../../assets/icons/Pin';
import User from '../../assets/icons/User';
import Camera from '../../assets/icons/Camera';
import Photo from '../../assets/icons/Photo';

//component
import PermissionDiv from '../../components/permission/PermissionDiv';
import PermissionUtil from '../../components/permission/PermissionUtil';
import { APP_PERMISSION_CODE } from '../../components/permission/PermissionCode';

const Permission = ({ navigation }: any) => {

  // useEffect(() => {
  //   PermissionUtil.cmmReqPermis([...APP_PERMISSION_CODE.location, ...APP_PERMISSION_CODE.notification, ...APP_PERMISSION_CODE.camera, ...APP_PERMISSION_CODE.photo, ...APP_PERMISSION_CODE.contact]);
  // }, []);

  // delay를 안먹이니깐 권한 창이 뜨고 화면이 렌더링 되어서
  // 그걸 방지 하기 위해 delay 먹여놓음
  useEffect(() => {
    // Add a delay of 1000 milliseconds (1 second)
    const delay = 1000;

    // Perform permission checks after the delay
    const timeoutId = setTimeout(() => {
      PermissionUtil.cmmReqPermis([
        ...APP_PERMISSION_CODE.location,
        ...APP_PERMISSION_CODE.notification,
        ...APP_PERMISSION_CODE.camera,
        ...APP_PERMISSION_CODE.photo,
        ...APP_PERMISSION_CODE.contact,
      ]);
    }, delay);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
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
        style={{marginBottom: 10}}
        >
        SQUARE 서비스 이용을 위해 {'\n'}
        필요한 접근권한 안내입니다.
        </Text>
        <Text 
        size={14} 
        color={colors.text._secondary} 
        weight={'Regular'}
        style={{marginBottom: 10}}
        >
        선택적 접근권한 허용 거부 시 일부 서비스 이용에 {'\n'}
        제한이 있을 수 있습니다. {'\n'}
        접근권한은 [설정 &gt; Square] 에서 변경하실 수 있습니다.
        </Text>
        {/* 필요한 권한 추가 */}
        <PermissionDiv 
        icon={<Pin  color={'#111111'} size={24} />}
        permission={'위치'}
        isNeccessary={true}
        subText={'매장 위치 확인 및 검색, 주문 등에 사용'}
        />
        <PermissionDiv 
        icon={<Notification  color={'#111111'} size={24} />}
        permission={'알림'}
        isNeccessary={false}
        subText={'주문 정보 및 공지, 이벤트 알림 시 사용'}
        />
        <PermissionDiv 
        icon={<Camera  color={'#111111'} size={24} />}
        permission={'카메라'}
        isNeccessary={false}
        subText={'사진리뷰 및 프로필 설정 시 사진촬영, 주문 시 QR \n코드 스캔'}
        />
        <PermissionDiv 
        icon={<Photo  color={'#111111'} size={24} />}
        permission={'사진'}
        isNeccessary={false}
        subText={'사진리뷰 및 프로필 설정 시 이미지 첨부'}
        />
        <PermissionDiv 
        icon={<User  color={'#111111'} size={24} />}
        permission={'연락처'}
        isNeccessary={false}
        subText={'공유 시 연락처 목록 불러오기'}
        />
      </S.Main>
      <S.Bottom onPress={() => navigation.reset({routes: [{name: 'Login'}]})}>
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
