import React from 'react';
import { FlatList } from 'react-native';
import { Modal, Pressable, Linking, TouchableOpacity } from 'react-native';

// styled
import * as S from './LocationChgModal.styles';
import { Text } from '../../common/fonts';
import { colors } from '../../common/globalStyles';

interface LocationPermModalProps {
  modalVisible: boolean;
  closeModal: () => void;
}

const LocationPermModal = ({ modalVisible, closeModal }: LocationPermModalProps) => {
  
  const locations = [
    { name: '여의도동', active: false },
    { name: '소담동', active: false },
    { name: '덕명동', active: true },
  ];

  const closeWithAnimation = () => {
    closeModal();
  }

  const handleOverlayPress = (e: any) => {
    e.stopPropagation();
    // 모달 외의 영역을 터치했을 때 모달을 닫는 동작 추가
    closeModal();
  };

  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        closeWithAnimation();
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        onPress={handleOverlayPress}
      >
        <S.CenteredView>
          <S.ModalView onPress={(e: any) => e.stopPropagation()}>
            {/* 지역 리스트 표시 */}
            <FlatList
              data={locations}
              renderItem={({ item }) => (
                <S.LocationBtn>
                    <Text
                    size={16}
                    color={colors.text._primary}
                    weight={item.active ? 'SemiBold' : 'Regular'}
                    >
                    {item.name}
                    </Text>
                </S.LocationBtn>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity>
              <Text
                size={16}
                color={colors.text._primary}
                weight={'Regular'}
              >
                내 지역 설정
              </Text>
            </TouchableOpacity>
          </S.ModalView>
        </S.CenteredView>
      </TouchableOpacity>
    </Modal>
  );
};

export default LocationPermModal;
