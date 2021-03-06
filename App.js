import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';

import RootNavigation from './src/navigation/RootNavigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MenuProvider>
        <StatusBar backgroundColor={'#00695c'} barStyle="light-content" />
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </MenuProvider>
    </GestureHandlerRootView>
  );
}
