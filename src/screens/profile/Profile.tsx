import React, {useState} from 'react';
import * as S from './Profile.Styles'; // 스타일 컴포넌트 불러오기
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LocationChgModal from '../../components/main/modal/ProfileLocationChgModal';
import Down from '../../assets/icons/Down';
import {colors} from '../../components/common/globalStyles';
interface ProfileProps {
  navigation: any;
}

const Profile = ({navigation}: ProfileProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const rotation = useSharedValue(0);

  const openModal = () => {
    setModalVisible(true);
    changeDegree();
  };

  const closeModal = () => {
    setModalVisible(false);
    changeDegree();
  };

  const changeDegree = () => {
    rotation.value = withTiming(rotation.value === 0 ? 180 : 0, {
      duration: 200,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });
  // 더미 데이터
  const dummyData = {
    nickname: '녹차왕',
    email: 'yllh325@gmail.com',
    tabTitle: '덕명동',
  };

  return (
    <S.Container>
      <S.TopBarContainer>
        <S.Text>마이페이지</S.Text>
      </S.TopBarContainer>
      <S.NameCard>
        <S.ProfileInfoContainer>
          <S.ProfileImage source={require('../../assets/icons/enfj.png')} />
          <S.UserInfoContainer>
            <S.Nickname>{dummyData.nickname}</S.Nickname>
            <S.Email>{dummyData.email}</S.Email>
          </S.UserInfoContainer>
        </S.ProfileInfoContainer>
        <S.TabButton onPress={openModal}>
          <S.LocationContainer>
          <S.LocationText>
            {dummyData.tabTitle}
          </S.LocationText>
          <Animated.View style={animatedStyle}>
              <Down size={24} color={colors.white._200} />
            </Animated.View>
          </S.LocationContainer>
          <LocationChgModal
            modalVisible={modalVisible}
            closeModal={closeModal}
          />
        </S.TabButton>
      </S.NameCard>

      <S.ProfileMenuGrid>
        <S.ProfileMenu onPress={() => navigation.navigate('Edit')}>
          <S.ProfileMenuImage
            source={require('../../assets/icons/Setting.png')}
            resizeMode="contain">
            <S.MenuText>내 정보 변경</S.MenuText>
          </S.ProfileMenuImage>
        </S.ProfileMenu>
        <S.ProfileMenu onPress={() => navigation.navigate('MyCoupon')}>
          <S.ProfileMenuImage
            source={require('../../assets/icons/Coupon.png')}
            resizeMode="contain">
            <S.MenuText>내 쿠폰</S.MenuText>
          </S.ProfileMenuImage>
        </S.ProfileMenu>
      </S.ProfileMenuGrid>
      <S.ProfileMenuGrid>
        <S.ProfileMenu onPress={() => navigation.navigate('MyOrderList')}>
          <S.ProfileMenuImage
            source={require('../../assets/icons/OrderList.png')}
            resizeMode="contain">
            <S.MenuText>내 주문내역</S.MenuText>
          </S.ProfileMenuImage>
        </S.ProfileMenu>
        <S.ProfileMenu onPress={() => navigation.navigate('MyReview')}>
          <S.ProfileMenuImage
            source={require('../../assets/icons/Review.png')}
            resizeMode="contain">
            <S.MenuText>내가 쓴 리뷰</S.MenuText>
          </S.ProfileMenuImage>
        </S.ProfileMenu>
      </S.ProfileMenuGrid>
    </S.Container>
  );
};

export default Profile;
