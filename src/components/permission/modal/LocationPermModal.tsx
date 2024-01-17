import React from 'react';
import { Modal, Pressable, Linking } from 'react-native';

// styled
import * as S from './LocationPermModal.styles';
import {Text} from '../../common/fonts';
import {colors} from '../../common/globalStyles';

interface LocationPermModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const LocationPermModal = ({ modalVisible, closeModal }: LocationPermModalProps) => {

  const goSetting = () => {
    Linking.openSettings(); // 핸드폰 상 설정 페이지
    closeModal();
  }

  return (
    <Modal
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      closeModal();
    }}>
    <S.CenteredView>
      <S.ModalView>
        <S.TextAlert>
          <Text 
          size={15} 
          color={colors.text._primary} 
          weight={'Regular'}
          style={{textAlign: "center"}}
          >
            위치 사용 권한이 없습니다. 설정에서 권한을 활성화 해주세요.
          </Text>
        </S.TextAlert>
        <S.ButtonContainer>
          <S.Button border='right' onPress={closeModal}>
            <Text size={16} color={colors.text._primary} weight={'Regular'}>
              닫기
            </Text>
          </S.Button>
          <S.Button border='left' onPress={goSetting}>
            <Text size={16} color={colors.text._primary} weight={'SemiBold'}>
              설정
            </Text>
          </S.Button>
        </S.ButtonContainer>
      </S.ModalView>
    </S.CenteredView>
  </Modal>
  );
};

export default LocationPermModal;
