import React, {useState} from 'react';

// styled
import * as S from './Location.styles';
import {colors} from '../../components/common/globalStyles';

// components
import {Text} from '../../components/common/fonts';
import FindLocation from '../../assets/images/FindLocation.png';
import PermissionUtil from '../../components/permission/PermissionUtil';
import { APP_PERMISSION_CODE } from '../../components/permission/PermissionCode';
import LocationPermModal from '../../components/permission/modal/LocationPermModal';

// icon
import Search from '../../assets/icons/Search';
import Close from '../../assets/icons/Close';
import CurrentLocation from '../../assets/icons/CurrentLocation';
import Right from '../../assets/icons/Right';

const Location = ({ navigation }: any) => {

  const [text, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const resetText = () => {
    onChangeText('');
  }

  // 위치 권한 허용 체크
  const checkLocation = async () => {
    try {
      const permissionGranted = await PermissionUtil.cmmReqPermission([...APP_PERMISSION_CODE.location]);
  
      // 권한이 부여되었을 때
      if (permissionGranted) {
        // 위치 설정 페이지로
        navigation.navigate('CurLocation');
      } else {
        // 권한이 거부되었을 때의 모달 띄우기
        // console.log('Location permission denied.');
        openModal();
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <S.Container>
      <S.Top>
        <Text size={18} color={colors.text._primary} weight={'SemiBold'}>내 지역 설정</Text>
      </S.Top>
      <S.SearchBar>
        <S.SearchDiv>
          <Search  color={colors.text._secondary} size={24} />
          <S.TextInput 
          placeholder='동명(읍, 면)으로 검색 (ex. 봉명동)'
          onChangeText={onChangeText}
          value={text}
          >
          </S.TextInput>
        </S.SearchDiv>
        {text=='' ? null : (
          <S.Close onPress={resetText}>
          <Close  color={colors.text._secondary} size={24} />
        </S.Close>
        )}
      </S.SearchBar>
      <S.CurrentLocation onPress={checkLocation}>
        <S.CLDiv>
          <CurrentLocation  color={colors.text._primary} size={24} />
          <Text 
          size={16} 
          color={colors.text._primary} 
          weight={'Regular'}
          style={{marginLeft: 12}}
          >
          현재 위치로 동네 설정
          </Text>
        </S.CLDiv>
        <Right  color={colors.text._secondary} size={24} />
      </S.CurrentLocation>
      <S.Background source={FindLocation} resizeMode='contain'/>
      {/* 위치 설정 모달 */}
      <LocationPermModal
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
    </S.Container>
  );
};

export default Location;
