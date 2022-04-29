import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar backgroundColor={'#00695c'} barStyle="light-content" />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
