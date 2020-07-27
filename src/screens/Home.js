import { SearchBar } from 'react-native-elements';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Card from '../components/Card';

const W = Dimensions.get('window').width;

export default function App() {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(val) => setSearch(val)}
        value={search}
        inputStyle={{ borderWidth: 0 }}
        inputContainerStyle={{
          width: W * 0.6,
          backgroundColor: '#fff',
        }}
        containerStyle={{
          backgroundColor: '#fff',
          borderBottomWidth: 0,
          borderTopWidth: 0,
          borderRadius: 50,
        }}
      />
      <Card />
      <Card />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: W * 0.9,
  },
});
