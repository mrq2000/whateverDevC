import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navigator from './AppNavigation';

const getFont = () =>
  Font.loadAsync({
    main: require('./assets/fonts/main.ttf'),
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
    <View style={styles.container}>
      <StatusBar hidden />
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
