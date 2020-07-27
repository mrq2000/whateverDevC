import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import { Icon } from 'react-native-elements';

const iconColor = '#1890ff';
const Card = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            'https://kenh14cdn.com/thumb_w/660/2020/7/24/jennie-13-1595578715644277247224.jpg',
        }}
        style={styles.img}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <Text style={{ fontStyle: 'italic', color: '#bfbfbf' }}>
          Ngày đăng: 19/02/2020
        </Text>

        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          Tin tuc viet asda asd asd asd ad asd asdnmamns a da s asd asd asd asa
          sdas asd as as asd
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5,
          }}
        >
          <View style={styles.icon}>
            <Icon name="thumbs-o-up" type="font-awesome" color={iconColor} />
            <Text style={styles.textIcon}>1233</Text>
          </View>

          <View style={styles.icon}>
            <Icon name="comment-o" type="font-awesome" color={iconColor} />
            <Text style={styles.textIcon}>123</Text>
          </View>

          <View style={styles.icon}>
            <Icon name="share" type="font-awesome" color={iconColor} />
            <Text style={styles.textIcon}>12</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    flexWrap: 'nowrap',
    flex: 1,
    marginTop: 5,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    color: iconColor,
    marginLeft: 3,
    fontStyle: 'italic',
  },
});

export default Card;
