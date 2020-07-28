import { SearchBar } from 'react-native-elements';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Card from '../components/Card';

const W = Dimensions.get('window').width;

export default function Home() {
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
      <View style={{ flex: 6 }}>
        <ScrollView>
          <View style={{ marginTop: 10 }}>
            <View
              style={{ justifyContent: 'space-between', flexDirection: 'row' }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'main' }}
              >
                Chiến dịch mới
              </Text>

              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'main',
                    color: '#40a9ff',
                    textDecorationLine: 'underline',
                  }}
                >
                  More
                </Text>
              </TouchableOpacity>
            </View>
            <Card />
            <Card />
          </View>

          <View style={{ marginTop: 10 }}>
            <View
              style={{ justifyContent: 'space-between', flexDirection: 'row' }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'main' }}
              >
                Quan tâm
              </Text>

              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'main',
                    color: '#40a9ff',
                    textDecorationLine: 'underline',
                    fontSize: 16,
                  }}
                >
                  More
                </Text>
              </TouchableOpacity>
            </View>
            <Card />
            <Card />
          </View>
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'main' }}>
          Các loại chiến dịch
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: W * 0.9,
  },
});
