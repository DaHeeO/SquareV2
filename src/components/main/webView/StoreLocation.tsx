import React, { Component } from "react";
import WebView from "react-native-webview";
import { Dimensions } from "react-native";

interface LocationPreviewProps {
  latitude: number;
  longitude: number;
}

class StoreLocation extends Component<LocationPreviewProps> {
  state = {
    latitude: this.props.latitude,
    longitude: this.props.longitude,
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
          uri: 'http://192.168.10.150:3000/app/store/preview',
        }}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
        onLoad={() => console.log('WebView loaded')}
      />
    );
  }
}

export default StoreLocation;
