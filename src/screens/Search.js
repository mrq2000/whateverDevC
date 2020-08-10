import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ScrollView
} from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';

import Card from '../components/Card';
import { RFPercentage } from 'react-native-responsive-fontsize';

const W = Dimensions.get('window').width;

export default function Home() {
  const data = useNavigationParam('data')
  const key = useNavigationParam('key')
  const [allData, setAllData] = useState(data?.posts ? data.posts : [])
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
        <Text style={{ fontWeight: 'bold', fontSize: RFPercentage(2.4) }}>Kết quả tìm kiếm cho: {key}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView>
          <FlatList
            extraData={allData}
            renderItem={(data, index) => <Card key={index} data={data} />}
          />
          {allData.map(data => <Card data={data} />)}
        </ScrollView>
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
