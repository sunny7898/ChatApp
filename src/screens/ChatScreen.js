import React, {useEffect} from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';

const ChatScreen = ({navigation}) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    return () =>
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: {backgroundColor: '#00695c'}});
  }, [navigation]);

  return (
    <View>
      <ScrollView></ScrollView>
      <View></View>
    </View>
  );
};

export default ChatScreen;
