import React, { useState } from 'react';
import { PieChart } from 'react-native-chart-kit';
import RNPickerSelect from 'react-native-picker-select'

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import Card from '../components/Card';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const Detail = () => {
  return (
    <View style={{ width: W * 0.9, flex: 1, alignSelf: 'center' }}>
      <View style={{ marginTop: 10 }}>
        <Card />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'main' }}>
          Thời Điểm:
        </Text>

        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            borderRadius: 10,
            marginLeft: 10,
          }}
        >
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: '1 Tuần', value: 'football' },
              { label: '1 Tháng', value: 'baseball' },
              { label: 'Từ Trước Đến Nay', value: 'hockey' },
            ]}
          />
        </View>
      </View>

      <PieChart
        data={data}
        width={W}
        height={H * 0.3}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        absolute
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Button title="Tiêu Cực" buttonStyle={{ backgroundColor: '#ff4d4f' }} />
        <Button title="Tích Cực" buttonStyle={{ backgroundColor: '#1890ff' }} />
        <Button
          title="Trung Lập"
          buttonStyle={{ backgroundColor: '#fadb14' }}
        />
      </View>
    </View>
  );
};

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

const data = [
  {
    name: 'Tiêu Cực',
    population: 250,
    color: '#ff4d4f',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Tích Cực',
    population: 450,
    color: '#1890ff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Trung Lập',
    population: 100,
    color: '#fadb14',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

export default Detail;
