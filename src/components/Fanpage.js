import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Fanpage = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri:
            'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-9/93879675_108592137492441_6308673798040190976_n.png?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=SeGRXUwQzWgAX-YgFCQ&_nc_ht=scontent.fhan5-7.fna&oh=78ecd57c25550a2d1b4b8c5b8fc2f752&oe=5F48400F',
        }}
        style={styles.img}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <Text
          style={{
            fontSize: RFPercentage(3),
            fontWeight: 'bold',
            fontFamily: 'main2',
          }}
        >
          TTVC
        </Text>
        <Text
          style={{
            color: '#bfbfbf',
            fontSize: RFPercentage(2.5),
            fontFamily: 'main2',
          }}
        >
          ID: 1086321563
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  img: {
    width: RFPercentage(10),
    height: RFPercentage(10),
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    flexWrap: 'nowrap',
    flex: 1,
  },
});

export default Fanpage;
