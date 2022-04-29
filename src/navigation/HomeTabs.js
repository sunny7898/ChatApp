import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import StatusScreen from '../screens/StatusScreen';
import HomeScreen from '../screens/HomeScreen';
import TabBar from './components/TabBar';

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
