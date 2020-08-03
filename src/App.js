import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navigator from './AppNavigation';

const getFont = () =>
  Font.loadAsync({
    main: require('./assets/fonts/main.ttf'),
    main2: require('./assets/fonts/main2.ttf'),
  });

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => setLoading(false)}
      ></AppLoading>
    );
  }
  return (
    <>
      <StatusBar hidden />
      <Navigator />
    </>
  );
}