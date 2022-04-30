import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {getHeight, getWidth} from '../../utils/dimensions';

const InputContainer = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TextInput
          placeholder="Message"
          placeholderTextColor={'#EEE'}
          style={styles.inputBox}
        />
        <View style={styles.micBox}>
          <Icon name="microphone" size={18} color={'#FFF'} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default InputContainer;
const styles = StyleSheet.create({
  inputContainer: {
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
