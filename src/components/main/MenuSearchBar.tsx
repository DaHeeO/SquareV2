import React, {useState} from 'react';
import {View} from 'react-native';

// styled
import * as S from './MenuSearchBar.styles';
import {Text} from '../common/fonts';
import {colors} from '../common/globalStyles';

// icon
import Search from '../../assets/icons/Search';
import Close from '../../assets/icons/Close';


const MenuSearchBar = () => {

  const [text, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const resetText = () => {
    onChangeText('');
  }

  return (
    <S.SearchBar>
      <S.SearchDiv>
        <Search  color={colors.text._secondary} size={24} />
        <S.TextInput 
        placeholder='검색어를 입력해주세요'
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
  );
};

export default MenuSearchBar;
