import React, { Component } from "react";
import WebView from "react-native-webview";
import { Dimensions } from "react-native";

interface LocationPreviewProps {
  storeLat: number;
  storeLong: number;
  storeName: string;
  currentLat: number;
  currentLong: number;
}

class StoreLocation extends Component<LocationPreviewProps> {
  private webview: WebView | null = null;
  
  state = {
    storeLat: this.props.storeLat,
    storeLong: this.props.storeLong,
    storeName: this.props.storeName,
    currentLat: this.props.currentLat,
    currentLong: this.props.currentLong,
  };

  componentDidUpdate(prevProps: LocationPreviewProps) {
    // Check if currentLat or currentLong have changed
    if (
      prevProps.currentLat !== this.props.currentLat ||
      prevProps.currentLong !== this.props.currentLong
    ) {
      this.updateWebView();
    }
  }

  updateWebView() {
    const { storeLat, storeLong, storeName, currentLat, currentLong } = this.state;

    this.webview?.postMessage(
      JSON.stringify({
        type: "STORE_INFO",
        payload: { storeLat, storeLong, storeName, currentLat, currentLong },
      })
    );
  }

  render() {
    const { storeLat, storeLong, storeName } = this.state;

    const injectedJavaScript = `
      window.postMessage({
        type: 'STORE_INFO',
        payload: { storeLat: ${storeLat}, storeLong: ${storeLong}, storeName: '${storeName}', currentLat: ${this.state.currentLat}, currentLong: ${this.state.currentLong}}
      });
    `;

    return (
      <WebView
        ref={(ref) => (this.webview = ref)} // Save a reference to the WebView component
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        source={{
          uri: 'http://192.168.10.179:3000/app/store/preview',
        }}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
      />
    );
  }
}

export default StoreLocation;
