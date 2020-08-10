import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Card from '../components/Card';
import Search from '../components/Search'

const W = Dimensions.get('window').width;

export default function Home() {
  return (
    <View style={styles.container}>
      <Search />

      <View style={{ flex: 6 }}>
        <ScrollView>
          <View style={{ marginTop: 10 }}>
            <View
              style={{ justifyContent: 'space-between', flexDirection: 'row' }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(2.6),
                  fontWeight: 'bold',
                  fontFamily: 'main',
                }}
              >
                Chiến dịch mới
              </Text>

              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'main',
                    color: '#40a9ff',
                    textDecorationLine: 'underline',
                    fontSize: RFPercentage(2),
                  }}
                >
                  More
                </Text>
              </TouchableOpacity>
            </View>
            {/* <Card />
            <Card /> */}
          </View>

          <View style={{ marginTop: 10 }}>
            <View
              style={{ justifyContent: 'space-between', flexDirection: 'row' }}
            >
              <Text
                style={{
                  fontSize: RFPercentage(2.6),
                  fontWeight: 'bold',
                  fontFamily: 'main',
                }}
              >
                Quan tâm
              </Text>

              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'main',
                    color: '#40a9ff',
                    textDecorationLine: 'underline',
                    fontSize: RFPercentage(2),
                  }}
                >
                  More
                </Text>
              </TouchableOpacity>
            </View>
            {/* <Card />
            <Card /> */}
          </View>
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: RFPercentage(2.6),
            fontWeight: 'bold',
            fontFamily: 'main',
          }}
        >
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
    alignSelf: 'center',
  },
});
