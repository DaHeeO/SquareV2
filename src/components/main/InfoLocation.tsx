import React from 'react';
import { Image } from 'react-native';

// styled
import styled from 'styled-components/native';
import {colors} from '../common/globalStyles';
import {Text} from '../common/fonts';

// icon, images
import Pin from '@/assets/icons/Pin';
import Copy from '@/assets/icons/Copy';
import Clipboard from '@react-native-clipboard/clipboard';
import MapViewPreview from '@/assets/images/MapViewPreview.png';

interface Props {
  storeInfo: any;
  onNavigateToLocation: any;
}

const InfoLocation = ({storeInfo, onNavigateToLocation}: Props) => {

  const { address, name } = storeInfo;

  const copyToClipboard = () => {
    try {
      Clipboard.setString(address);
    } catch (error) {
      console.error("클립보드 복사 오류:", error);
    }
  };

  const navigateToMap = () => {
    onNavigateToLocation();
  };

  return (
    <Container>
      <MapView>
        <Preview source={MapViewPreview}/>
      </MapView>
      <ButtonContainer>
        <Button border={true} onPress={copyToClipboard}>
          <Copy size={14} color={colors.text._primary}/>
          <Text size={14} color={colors.text._primary} weight={'Regular'} style={{marginLeft: 4}}>
            주소 복사
          </Text>
        </Button>
        <Button onPress={navigateToMap}>
          <Pin size={14} color={colors.text._primary}/>
          <Text size={14} color={colors.text._primary} weight={'Regular'} style={{marginLeft: 4}}>
            지도 보기
          </Text>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 100px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.white._600};
`

const MapView = styled.View`
  flex: 1;
`

const Preview = styled(Image)`
  width: 100%;
  height: 100%;
`

const PinContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 30px;
  background-color: ${colors.text._primary};
`

const ButtonContainer = styled.View`
    flex-direction: row;
    border-top-width: 1px;
    border-color: ${colors.white._600};
`

const Button = styled.Pressable<{ border?: boolean }>`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 6px 0px;
    border-color: ${colors.white._600};
    border-right-width: ${({ border }) => (border ? '1px' : '0')};
`;

export default InfoLocation;
