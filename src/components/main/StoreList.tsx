import React from 'react';
import * as S from './StoreList.Styles'; // 여기에 StoreList 스타일 정의

interface Store {
  id: number;
  name: string;
  rating: number;
}

interface StoreListProps {
  stores: Store[];
}

const StoreList: React.FC<StoreListProps> = ({ stores }) => {
  return (
    <S.Container>
      <S.List>
        {stores.map((store, index) => {
          // 첫 번째 아이템인 경우
          if (index === 0) {
            return (
              <S.FirstItem key={store.id}>
                <S.Icon />
                <S.DetailsContainer>          
                <S.Name>{store.name}</S.Name>
                <S.Rating>{store.rating}</S.Rating>
                </S.DetailsContainer>      
              </S.FirstItem>
            );
          }
          // 마지막 아이템인 경우
          else if (index === stores.length - 1) {
            return (
              <S.LastItem key={store.id}>
                <S.Icon />
                <S.DetailsContainer>    
                <S.Name>{store.name}</S.Name>
                <S.Rating>{store.rating}</S.Rating>
                </S.DetailsContainer>   
              </S.LastItem>
            );
          }
          // 나머지 아이템들
          else {
            return (
              <S.Item key={store.id}>
                <S.Icon />
                <S.DetailsContainer>   
                <S.Name>{store.name}</S.Name>
                <S.Rating>{store.rating}</S.Rating>
                </S.DetailsContainer>  
              </S.Item>
            );
          }
        })}
      </S.List>
    </S.Container>
  );
};

export default StoreList;
