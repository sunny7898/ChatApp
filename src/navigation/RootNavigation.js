import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {getWidth} from '../utils/dimensions';

import StatusScreen from '../screens/StatusScreen';
import ChatStack from './ChatStack';
import Header from '../ui/Header';

const Tab = createMaterialTopTabNavigator();

const RootNavigation = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Header />
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {fontSize: 12},
            tabBarActiveTintColor: '#1de9b6',
            tabBarInactiveTintColor: '#b2dfdb',
            tabBarItemStyle: {width: getWidth() / 2},
            tabBarStyle: {backgroundColor: '#00695c'},
            tabBarIndicatorStyle: {backgroundColor: '#1de9b6'},
          }}>
          <Tab.Screen name="Main" component={ChatStack} />
          <Tab.Screen name="Status" component={StatusScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default RootNavigation;
