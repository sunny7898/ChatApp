import React from 'react';
import {View, Text} from 'react-native';
import {getHeight} from '../utils/dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const Header = ({name}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: getHeight() / 15,
        backgroundColor: '#00695c',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{marginHorizontal: 10}}>
        <Icon
          name={'arrow-left'}
          size={15}
          color={'#FFF'}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: '#FFF',
          marginHorizontal: 10,
        }}>
        {name}
      </Text>
    </View>
  );
};

export default Header;
