import React from 'react';
import {View} from 'react-native';
import ChatHeader from '../chat/component/ChatHeader';
import ChatContainer from '../chat/component/ChatContainer';
import InputContainer from '../chat/component/InputContainer';

const ChatScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ChatHeader />
      <ChatContainer />
      <InputContainer />
    </View>
  );
};

export default ChatScreen;
