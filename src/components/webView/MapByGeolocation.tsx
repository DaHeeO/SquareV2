import React, { Component } from "react";
import WebView from "react-native-webview";
import { Dimensions } from "react-native";
import Geolocation from '@react-native-community/geolocation';

// interface
import {LocationState} from '../../screens/settings/CurLocation';

// 부모 컴포넌트로 보낼 정보를 담은 인터페이스
interface MapByGeolocationProps {
  onLocationInfo: (locationInfo: LocationState) => void;
}

// 위치 정보 사용할 인터페이스
interface MapByGeolocationState {
  latitude: number | null;
  longitude: number | null;
}

class MapByGeolocation extends Component<MapByGeolocationProps, MapByGeolocationState> {
  constructor(props: MapByGeolocationProps) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    };
  }

  // 웹뷰로 데이터 전달 (native => webview)
  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.setState({
          latitude,
          longitude,
        });

        console.log(latitude, longitude);
      },
      (error) => {
        console.log(error.code, error.message);
      }
    );
  }

  handleMessage = (data: string) => {
    try {
      const parsedData = JSON.parse(data);
      const { code, legalAddress } = parsedData.payload;

      // 정보 업데이트해서 부모 컴포넌트로 전달
      this.props.onLocationInfo({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        code,
        legalAddress,
      });

    } catch (error) {
      console.error("Error parsing message from WebView:", error);
    }
  };

  render() {
    const { latitude, longitude } = this.state;

    // webview로 전달할 데이터 세팅 (javascript file)
    const injectedJavaScript = `
      window.postMessage({
        type: 'SET_COORDINATES',
        payload: { latitude: ${latitude}, longitude: ${longitude} }
      });
    `;

    return (
        <WebView
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        source={{
          uri: 'http://172.30.1.54:3000/app/current',
        }}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
        onLoad={() => console.log('WebView loaded')}
        onMessage={(event) => this.handleMessage(event.nativeEvent.data)}
      />
    );
  }
}

export default MapByGeolocation;