import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import MenuBar from '../../components/MenuBar';
import {getHeight, getWidth} from '../../utils/dimensions';

const ChatHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatHeader}>
      <View>
        <Icon
          name="arrow-left"
          size={18}
          color={'#FFF'}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.chatHeaderContent}>
        <View>
          <Image
            source={{
              uri: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
            }}
            style={styles.profileImage}
            resizeMode="contain"
          />
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#FFF'}}>
            Sunny Goswami
          </Text>
          <Text style={{fontSize: 12, fontWeight: '500', color: '#FFF'}}>
            Online
          </Text>
        </View>
      </View>
      <MenuBar
        data={[
          'View Contact',
          'Media, Links and docs',
          'Mute Notifications',
          'Block',
          'Clear chat',
        ]}
      />
    </View>
  );
};

export default ChatHeader;
const styles = StyleSheet.create({
  chatHeader: {
    height: getHeight() / 15,
    flexDirection: 'row',
    backgroundColor: '#00695c',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  chatHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
  profileImage: {
    height: getHeight() / 25,
    width: getWidth() / 12,
    borderRadius: 50,
  },
});
