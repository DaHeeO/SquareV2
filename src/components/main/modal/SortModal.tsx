import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import * as S from './SortModal.Styles';

interface SortModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSortOptionSelect: (option: string) => void;
}

const SortModal: React.FC<SortModalProps> = ({ isVisible, onClose, onSortOptionSelect }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <S.ModalBackground>
        <S.ModalContainer>
          <S.Option onPress={() => onSortOptionSelect('default')}>
            <Text>기본순</Text>
          </S.Option>
          <S.Option onPress={() => onSortOptionSelect('rating')}>
            <Text>평점순</Text>
          </S.Option>
          {/* 추가하고 싶은 다른 정렬 옵션들 */}
        </S.ModalContainer>
      </S.ModalBackground>
    </Modal>
  );
};

export default SortModal;
