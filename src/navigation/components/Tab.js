import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Tab = ({tab, style, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text style={style ? {color: style.color} : styles.label}>
        {tab.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  label: {
    fontSize: 15,
    color: '#FFFFFF',
  },
});
