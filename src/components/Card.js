import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import { RFPercentage } from 'react-native-responsive-fontsize';

const iconColor = '#1890ff';
const Card = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri:
            'https://kenh14cdn.com/thumb_w/660/2020/7/24/jennie-13-1595578715644277247224.jpg',
        }}
        style={styles.img}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#bfbfbf', fontSize: RFPercentage(2) }}>
            Ngày đăng: 19/02/2020
          </Text>

          <TouchableOpacity>
            <Icon
              name="heart-o"
              type="font-awesome"
              color="#f759ab"
              size={RFPercentage(2)}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: RFPercentage(1.65),
            fontFamily: 'main',
          }}
          numberOfLines={5}
          ellipsizeMode="tail"
        >
          {data.content}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5,
          }}
        >
          <View style={styles.icon}>
            <Icon
              name="thumbs-o-up"
              type="font-awesome"
              color={iconColor}
              size={RFPercentage(2.5)}
            />
            <Text style={styles.textIcon}>{data.like}</Text>
          </View>

          <View style={styles.icon}>
            <Icon
              name="comment-o"
              type="font-awesome"
              color={iconColor}
              size={RFPercentage(2.5)}
            />
            <Text style={styles.textIcon}>{data.comment}</Text>
          </View>

          <View style={styles.icon}>
            <Icon
              name="share"
              type="font-awesome"
              color={iconColor}
              size={RFPercentage(2.5)}
            />
            <Text style={styles.textIcon}>{data.share}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    width: RFPercentage(15),
    height: RFPercentage(15),
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    flexWrap: 'nowrap',
    flex: 1,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    color: iconColor,
    marginLeft: 3,
    fontSize: RFPercentage(1.5),
  },
});

export default Card;
