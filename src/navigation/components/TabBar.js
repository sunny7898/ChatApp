import React from 'react';
import {View, StyleSheet} from 'react-native';
import {getHeight} from '../../utils/dimensions';

import Tab from './Tab';

const TabBar = ({state, navigation}) => {
  const {routes} = state;
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map(route => (
          <Tab
            tab={route}
            // color = {}
            // onPress = {}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: getHeight() / 6,
    backgroundColor: 'red',

  },
  container: {},
});

export default TabBar;
