import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import ChatCard from '../chat/component/ChatCard';
const HomeScreen = () => {
  return (
    <View>
      <View></View>
      <View style={{backgroundColor: '#004d40'}}>
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
      </View>
    </View>
  );
};

export default HomeScreen;
