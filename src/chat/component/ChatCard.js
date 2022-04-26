import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {getHeight, getWidth} from '../../utils/dimensions';
import {useNavigation} from '@react-navigation/native';

const ChatCard = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Chat', {msg: 'From Home Screen'})
      }
      style={{
        height: getHeight() / 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      <Image
        source={{
          uri: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
        }}
        style={{
          height: getHeight() / 15,
          width: getWidth() / 7,
          borderRadius: 50,
          margin: 10,
        }}
        resizeMode="contain"
      />
      <View>
        <Text style={{color: '#ffffff', fontSize: 16}}>Sunny Goswami</Text>
        <Text style={{color: '#bdbdbd', fontSize: 13}}>
          Hi, I am using Whatsapp!
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatCard;
