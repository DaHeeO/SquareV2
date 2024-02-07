
import React, { useState } from 'react';
import StoreList from '../../components/main/StoreList';
import SortModal from '../../components/main/modal/SortModal'; 
import * as S from './Regular.Styles'; // 스타일 컴포넌트 불러오기


const Regular = () => {

  const [isSortModalVisible, setSortModalVisible] = useState(false); 
  const stores = [
    { id: 1, name: '스토어1', rating: 4.8 },
    { id: 2, name: '스토어2', rating: 4.8 },
    { id: 3, name: '스토어3', rating: 4.8 },
    { id: 4, name: '스토어4', rating: 4.8 },
    { id: 5, name: '스토어5', rating: 4.8 },
    { id: 6, name: '스토어6', rating: 4.8 },
    { id: 7, name: '스토어7', rating: 4.8 },
    { id: 8, name: '스토어8', rating: 4.8 },
    { id: 9, name: '스토어9', rating: 4.8 },
    { id: 10, name: '스토어10', rating: 4.8 },
  ];

  // const toggleSortModal = () => {
  //   setSortModalVisible(!isSortModalVisible); 
  // };

  // const handleSortOptionSelect = (option : string) => {
  //   console.log(option);
  //   setSortModalVisible(false); 
  // };

  return (
    <S.Container>
        <S.TopBarContainer>
        <S.Text>단골</S.Text></S.TopBarContainer>
        {/* <S.SortButton onPress={toggleSortModal}> 
          <S.SortButtonText>정렬</S.SortButtonText>
        </S.SortButton> */}
        {/* <SortModal 
        isVisible={isSortModalVisible}
        onClose={toggleSortModal}
        onSortOptionSelect={handleSortOptionSelect}
      /> */}
        {/* <StoreList stores={stores} /> */}
    </S.Container>
  );
};

export default Regular;
