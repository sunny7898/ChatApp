import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Tab = ({tab, icon, style, onPress}) => {
  return (
    <TouchableOpacity style = {[styles.container, style]}>
      <Text style={{fontSize: 15, color: '#fff'}}>{tab.name}</Text>
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
  }
});
