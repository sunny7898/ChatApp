import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getHeight, getWidth} from '../utils/dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ChatScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
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
        <TouchableOpacity style={{position: 'absolute', right: 10}}>
          <Icon name="ellipsis-v" size={18} color={'#FFF'} />
        </TouchableOpacity>
      </View>
      <ScrollView></ScrollView>
      <View style={styles.chatContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TextInput
            placeholder="Message"
            placeholderTextColor={'#EEE'}
            style={styles.inputBox}
          />
          <View style={styles.micBox}>
            <Icon
              name="microphone"
              size={18}
              color={'#FFF'}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chatHeader: {
    backgroundColor: '#00695c',
    height: getHeight() / 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  chatHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    width: getWidth(),
  },
  profileImage: {
    height: getHeight() / 25,
    width: getWidth() / 12,
    borderRadius: 50,
  },
  chatContainer: {
    height: getHeight() / 20,
    width: getWidth() - 10,
    position: 'absolute',
    bottom: 10,
    marginHorizontal: 5,
  },
  inputBox: {
    backgroundColor: '#00695c',
    width: '88%',
    borderRadius: 40,
    paddingHorizontal: 20,
    color: '#eee',
  },
  micBox: {
    padding: 10,
    backgroundColor: '#00bfa5',
    width: getWidth() / 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
