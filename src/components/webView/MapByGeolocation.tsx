import React, { Component } from "react";
import WebView from "react-native-webview";
import { Dimensions } from "react-native";
import Geolocation from '@react-native-community/geolocation';

interface LocationState {
  latitude: number | null;
  longitude: number | null;
}

export default class Location extends Component<{}, LocationState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    };
  }

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

  render() {
    const { latitude, longitude } = this.state;

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
          uri: 'http://192.0.0.2:3000/current',
        }}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
      />
    );
  }
}
