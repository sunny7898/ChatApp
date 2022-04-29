import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabs from './HomeTabs';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={HomeTabs} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
