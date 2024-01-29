import React from 'react';
import { Image } from 'react-native';

// styled
import styled from 'styled-components/native';
import {colors} from '../common/globalStyles';
import {Text} from '../common/fonts';

// icon
import Category1 from '../../assets/images/Category1.png';
import Category2 from '../../assets/images/Category2.png';
import Category3 from '../../assets/images/Category3.png';
import Category4 from '../../assets/images/Category4.png';

const categories = [
  { id: 1, name: '한식', icon: Category1, navigate: 'PickUp' },
  { id: 2, name: '중식/일식', icon: Category2, navigate: 'PickUp' },
  { id: 3, name: '패스트푸드', icon: Category3, navigate: 'PickUp' },
  { id: 4, name: '카페/베이커리', icon: Category4, navigate: 'PickUp' },
];
  
interface CategoryProps {
    onCategoryPress: (route: string) => void;
}

const Category = ({onCategoryPress}: CategoryProps) => {


  return (
    <Container>
    {categories.map((category) => (
      <CategoryPress key={category.id} 
        onPress={() => {
            onCategoryPress(category.navigate);
        }}
      >
        <IconDiv>
          <Icon source={category.icon} />
        </IconDiv>
        <Text size={14} color={colors.text._primary} weight={'Regular'}>
          {category.name}
        </Text>
      </CategoryPress>
    ))}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  margin: 15px 24px;
  align-items: center;
`
const CategoryPress = styled.Pressable`
  flex: 1;
  align-items: center;
  padding: 5px 0px;
`

const IconDiv = styled.View`
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 18px;
  background-color: ${colors.white._400};
  margin-bottom: 5px;
`

export const Icon = styled(Image)`
  width: 40px;
  height: 40px;
`;

export default Category;
