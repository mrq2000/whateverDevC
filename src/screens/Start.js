import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

import Fanpage from '../components/Fanpage';

const W = Dimensions.get('window').width;

const Detail = () => {
  return (
    <View
      style={{
        width: W * 0.8,
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: RFPercentage(4.5), fontFamily: 'main2' }}>
        WHATEVER
      </Text>

      <Text style={{ fontSize: RFPercentage(2.5), fontFamily: 'main2' }}>
        Be Special, Be Different
      </Text>

      <View style={{ width: '100%', marginTop: RFPercentage(8) }}>
        <Input
          placeholder="Input Your Fanpage ID"
          inputStyle={{ fontFamily: 'main2' }}
          leftIcon={<Icon name="user" size={24} color="black" />}
          keyboardType="numeric"
        />
      </View>

      <View
        style={{
          marginTop: RFPercentage(5),
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Button
          title="Sử dụng ID này"
          titleStyle={{ fontSize: RFPercentage(2), fontFamily: 'main2' }}
        />
        <Button
          title="Bỏ Qua"
          titleStyle={{ fontSize: RFPercentage(2), fontFamily: 'main2' }}
        />
      </View>

      <View style={{ marginTop: 30, width: '100%' }}>
        <Text style={{ fontSize: RFPercentage(2), fontFamily: 'main2' }}>
          Fanpage truy cập gần đây:
        </Text>

        <ScrollView style={{ maxHeight: RFPercentage(30), marginTop: 10 }}>
          <Fanpage />
          <Fanpage />
          <Fanpage />
        </ScrollView>
      </View>
    </View>
  );
};

export default Detail;
