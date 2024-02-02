import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Modal, Pressable, Linking, TouchableOpacity } from 'react-native';

// styled
import * as S from './LocationChgModal.styles';
import { Text } from '../../common/fonts';
import { colors } from '../../common/globalStyles';

interface LocationPermModalProps {
  onLocationChanged: (location: string) => void;
  modalVisible: boolean;
  closeModal: () => void;
}

const locations = [
  { name: '여의도동'},
  { name: '소담동'},
  { name: '덕명동'},
];

const LocationPermModal = ({ onLocationChanged, modalVisible, closeModal }: LocationPermModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const closeWithAnimation = () => {
    closeModal();
  }

  const handleOverlayPress = (e: any) => {
    e.stopPropagation();
    // 모달 외의 영역을 터치했을 때 모달을 닫는 동작 추가
    closeModal();
  };

  const selectLocation = (index: number) => {
    setActiveIndex(index);
    onLocationChanged(locations[index].name);
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
              renderItem={({ item, index }) => (
                <S.LocationBtn onPress={() => selectLocation(index)}>
                    <Text
                    size={16}
                    color={colors.text._primary}
                    weight={activeIndex === index ? 'SemiBold' : 'Regular'}
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
