import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import firebase from 'firebase';

import Card from '../components/Card';

const W = Dimensions.get('window').width;

export default function Home() {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    console.log('start');
    const ref = firebase.database().ref('/posts');
    await ref.on('child_added', (snaps) => {
      if(snaps.child('content').val().includes(search)) {
        console.log(snaps.val())
      }
    })
    console.log('end')
  };

  // useEffect(() => {
  //   firebase
  //     .database()
  //     .ref('/')
  //     .once('value')
  //     .then((dataSnapshot) => {
  //       const newData = dataSnapshot.val();
  //       // console.log(newData);
  //     });
  // }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(val) => setSearch(val)}
        value={search}
        onSubmitEditing={() => handleSearch()}
        inputStyle={{
          borderWidth: 0,
          fontSize: RFPercentage(2),
          height: RFPercentage(2.5),
          minHeight: 10,
          padding: 0,
          margin: 0,
        }}
        inputContainerStyle={{
          borderRadius: 50,
          backgroundColor: '#fff',
          height: RFPercentage(6),
        }}
        containerStyle={{
          padding: 0,
          borderBottomWidth: 0,
          borderTopWidth: 0,
          backgroundColor: '#fff',
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
            <Card />
            <Card />
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
            <Card />
            <Card />
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
