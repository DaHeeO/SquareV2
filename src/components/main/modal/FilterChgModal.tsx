import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Modal, Pressable, Linking, TouchableOpacity } from 'react-native';

// styled
import * as S from './FilterChgModal.styles';
import { Text } from '../../common/fonts';
import { colors } from '../../common/globalStyles';
import Check from '@/assets/icons/Check';

interface LocationPermModalProps {
  onFilterChanged: (filter: string) => void;
  modalVisible: boolean;
  closeModal: () => void;
}

const filters = [
  { name: '기본순'},
  { name: '거리순'},
  { name: '인기순'},
];

const FilterChgModal = ({ modalVisible, closeModal, onFilterChanged }: LocationPermModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
 
  const closeWithAnimation = () => {
    closeModal();
  }

  const handleOverlayPress = (e: any) => {
    e.stopPropagation();
    // 모달 외의 영역을 터치했을 때 모달을 닫는 동작 추가
    closeModal();
  };

  const selectFilter = (index: number) => {
    setActiveIndex(index);
    onFilterChanged(filters[index].name);
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
        <S.CenteredView >
          <S.ModalView onPress={(e: any) => e.stopPropagation()}>
            <Text
              size={16}
              color={colors.text._primary}
              weight={"SemiBold"}
              >
              정렬
            </Text>
            {/* 지역 리스트 표시 */}
            <FlatList
              data={filters}
              renderItem={({ item, index }) => (
                <S.LocationBtn onPress={() => selectFilter(index)}>
                    <Text
                    size={18}
                    color={activeIndex === index ? colors.green._200 : colors.text._primary}
                    weight={'SemiBold'}
                    >
                    {item.name}
                    </Text>
                    {activeIndex === index ? <Check size={20} color={colors.green._200} /> : null}
                </S.LocationBtn>
              )}
            />
          </S.ModalView>
        </S.CenteredView>
      </TouchableOpacity>
    </Modal>
  );
};

export default FilterChgModal;
