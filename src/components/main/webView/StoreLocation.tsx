import React, { Component } from "react";
import WebView from "react-native-webview";
import { Dimensions } from "react-native";

interface LocationPreviewProps {
  storeLat: number;
  storeLong: number;
  storeName: string;
}

class StoreLocation extends Component<LocationPreviewProps> {
  state = {
    storeLat: this.props.storeLat,
    storeLong: this.props.storeLong,
    storeName: this.props.storeName,
  };

  render() {
    const { storeLat, storeLong, storeName } = this.state;

    // webview로 전달할 데이터 세팅 (javascript file)
    const injectedJavaScript = `
      window.postMessage({
        type: 'STORE_INFO',
        payload: { storeLat: ${storeLat}, storeLong: ${storeLong}, storeName: '${storeName}' }
      });
    `;

    return (
      <WebView
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        source={{
          uri: 'http://192.168.10.28:3000/app/store/preview',
        }}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
      />
    );
  }
}

export default StoreLocation;
