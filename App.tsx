import React, {useEffect} from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RecoilRoot} from 'recoil';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {Linking} from 'react-native';

// screen
import AccessToken from './src/screens/login/AccessToken';
import Login from './src/screens/login/Login';
import SocialLogin from './src/screens/login/SocialLogin';
import Permission from './src/screens/login/Permission';
import InitialStack from './src/navigations/InitialStackNavigation';
import BottomTab from './src/components/common/bottomTab/BottomTab';
import FullScreenStack from './src/navigations/FullScreenStackNavigation';

// component
import {config} from './src/navigations/DeepLinkConfig';

const Stack = createStackNavigator();

function App({navigation}: any) {
  const linking = {
    //디폴트 프로토콜 설정 필요
    prefixes: ['https://...', 'http://localhost:3000', 'square://'],

    async getInitialURL() {
      const url = await Linking.getInitialURL();

      if (url != null) {
        return url;
      }

      return null;
    },

    //받아준 딥링크 url을 subscribe에 넣어줘야 한다
    subscribe(listener) {
      const onReceiveURL = event => {
        const {url} = event;
        return listener(url);
      };

      Linking.addEventListener('url', onReceiveURL);
      return () => {
        Linking.removeAllListeners;
      };
    },
    config,
  };

  return (
    <RecoilRoot>
      <NavigationContainer linking={linking} documentTitle={{enabled: false}}>
        <Stack.Navigator initialRouteName="AccessToken">
          <Stack.Screen
            name="AccessToken"
            component={AccessToken}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SocialLogin"
            component={SocialLogin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Permission"
            component={Permission}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="Location"
            component={Location}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="FullScreenStack"
            component={FullScreenStack}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
