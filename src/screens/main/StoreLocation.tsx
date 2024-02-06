import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';  // View 추가

// style
import styled from 'styled-components/native';

// icon
import Back from '@/assets/icons/Back';
import { colors } from '../../components/common/globalStyles';

// component
import WebView from '../../components/main/webView/StoreLocation';
import { LocationButton } from '../../components/common/Buttons';



const StoreLocation = ({ navigation, route }: any) => {
  const popBack = () => {
    navigation.pop();
  };

  const latitude = route.params.latitude || 0;
  const longitude = route.params.longitude || 0;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView latitude={latitude} longitude={longitude} />
      <TopDiv>
        <BackComponent onPress={popBack}>
          <Back size={25} color={'black'} />
        </BackComponent>
        <LocationButton/>
      </TopDiv>
    </SafeAreaView>
  );
};

const TopDiv = styled.View`
  position: absolute;
  width: 100%;
  padding: 30px 12px 0px 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

const BackComponent = styled.Pressable`
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${colors.white._600};
  width: 40px;
  height: 40px;
  background-color: white;
`;

export default StoreLocation;
