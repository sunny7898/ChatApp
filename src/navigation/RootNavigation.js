import React from 'react';
import {getWidth} from '../utils/dimensions';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import StatusScreen from '../screens/StatusScreen';
import ChatStack from './ChatStack';
import HomeScreen from '../screens/HomeScreen';
import TabBar from '../navigation/components/TabBar';


const Tab = createMaterialTopTabNavigator();

const RootNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarActiveTintColor: '#1de9b6',
        tabBarInactiveTintColor: '#b2dfdb',
        tabBarItemStyle: {width: getWidth() / 2},
        tabBarStyle: {backgroundColor: '#00695c'},
        tabBarIndicatorStyle: {backgroundColor: '#1de9b6'},
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
    </Tab.Navigator>
  );
};

export default RootNavigation;
