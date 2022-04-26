import React from 'react';
import {View, Text} from 'react-native';
import { getHeight } from '../utils/dimensions';
const Header = () => {
  return (
    <View style={{height: getHeight() / 15, backgroundColor: '#00695c'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: '#e0f2f1',
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        Whatsapp
      </Text>
    </View>
  );
};

export default Header;
