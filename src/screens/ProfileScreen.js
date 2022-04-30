import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../ui/Header';
import {getHeight, getWidth} from '../utils/dimensions';

const URL =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajlVx5enRiwN2_9gqHzr9FPrcAmyPAJNNXA&usqp=CAU';

const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <Header name={'Profile'} />

      <View style={styles.imageSection}>
        <Image
          source={{uri: URL}}
          style={styles.profileImage}
          resizeMode="contain"
        />
        <View style={styles.uploadImage}>
          <Icon name={'camera'} size={20} color={'#FFF'} />
        </View>
      </View>

      <View style={styles.textContainer}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <View style={{paddingTop: 5, flex: 0.1}}>
            <Icon name={'user'} size={16} color={'#FFF'} solid />
          </View>
          <View style={{flex: 0.9}}>
            <Text style={{fontSize: 12, color: '#80cbc4'}}>Name</Text>
            <Text style={{fontSize: 14, color: '#FFF'}}>Sunny Goswami</Text>
            <Text style={{fontSize: 10, color: '#80cbc4'}}>
              This is not your username or pin. This is the name that will be
              visible to your Whatsapp contacts.
            </Text>
            <View style={{position: 'absolute', right: 0, top: 8}}>
              <Icon name={'pen'} size={16} color={'#00bfa5'} solid />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={{paddingTop: 5, flex: 0.1}}>
            <Icon name={'info'} size={16} color={'#FFF'} solid />
          </View>
          <View style={{flex: 0.9}}>
            <Text style={{fontSize: 12, color: '#80cbc4'}}>About</Text>
            <Text style={{fontSize: 14, color: '#FFF'}}>
              Hi, there! I am on whatsapp!
            </Text>
            <View style={{position: 'absolute', right: 0, top: 8}}>
              <Icon name={'pen'} size={16} color={'#00bfa5'} solid />
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{paddingTop: 5, flex: 0.1}}>
            <Icon name={'phone-alt'} size={16} color={'#FFF'} solid />
          </View>
          <View style={{flex: 0.9}}>
            <Text style={{fontSize: 12, color: '#80cbc4'}}>Phone</Text>
            <Text style={{fontSize: 14, color: '#FFF'}}>+919598659865</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004d40',
  },
  imageSection: {
    height: getHeight() / 5,
    width: getWidth() / 2.5 + 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginTop: 20,
  },
  profileImage: {
    height: '100%',
    width: '80%',
    borderRadius: getHeight() / 8,
  },
  uploadImage: {
    height: 50,
    width: 50,
    backgroundColor: '#00bfa5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginLeft: -50,
  },
  textContainer: {
    marginTop: 50,
    marginHorizontal: 30,
  },
  field: {},
});
