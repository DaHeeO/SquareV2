import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';  // View 추가

// style
import styled from 'styled-components/native';
import { colors } from '../../components/common/globalStyles';
import { Text } from '../../components/common/fonts';

// icon
import Back from '@/assets/icons/Back';
import CurrentLocation from '@/assets/icons/CurrentLocation';

// component
import WebView from '../../components/main/webView/StoreLocation';
import LocationPermModal from '../../components/permission/modal/LocationPermModal';
import PermissionUtil from '../../components/permission/PermissionUtil';
import { APP_PERMISSION_CODE } from '../../components/permission/PermissionCode';



const StoreLocation = ({ navigation, route }: any) => {

  const [modalVisible, setModalVisible] = useState(false);

  const popBack = () => {
    navigation.pop();
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // 위치 권한 허용 체크
  const checkLocation = async () => {
    try {
      const permissionGranted = await PermissionUtil.cmmReqPermission([...APP_PERMISSION_CODE.location]);
  
      // 권한이 부여되었을 때
      if (permissionGranted) {
      } else {
        // 권한이 거부되었을 때의 모달 띄우기
        openModal();
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const storeLat = route.params.latitude || 0;
  const storeLong = route.params.longitude || 0;
  const storeName = route.params.name || '';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView storeLat={storeLat} storeLong={storeLong} storeName={storeName}/>
      <TopDiv>
        <BackComponent onPress={popBack}>
          <Back size={25} color={'black'} />
        </BackComponent>
        <LocationButton onPress={checkLocation}>
          <CurrentLocation size={20} color={colors.text._primary} />
          <Text size={14} color={colors.text._primary} weight={'Regular'} style={{marginLeft: 6}}>현재 위치로</Text>
        </LocationButton>
      </TopDiv>
      {/* 위치 설정 모달 */}
      <LocationPermModal
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
    </SafeAreaView>
  );
};

const TopDiv = styled.View`
  position: absolute;
  width: 100%;
  padding: 30px 12px 0px 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

const BackComponent = styled.Pressable`
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${colors.white._600};
  width: 40px;
  height: 40px;
  background-color: white;
`;

const LocationButton = styled.Pressable`
  width: auto;
  flex-direction: row;
  align-items:center;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${colors.white._600};
`;

export default StoreLocation;
