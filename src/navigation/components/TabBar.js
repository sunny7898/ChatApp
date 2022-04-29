import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {getHeight, getWidth} from '../../utils/dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Tab from './Tab';

const TabBar = ({state, navigation}) => {
  const {routes} = state;
  const [selected, setSelected] = useState('Home');
  const [iconColor, setIconColor] = useState('#fff');

  const renderSelection = currentTab =>
    currentTab === selected ? styles.isSelected : null;

  return (
    <View style={styles.wrapper}>
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={styles.header}>Whatsapp</Text>
      </View>
      <View style={styles.container}>
        <View style={{backgroundColor: 'blue', marginRight: 10}}>
          <Icon
            name="camera"
            size={15}
            color={iconColor}
            onPress={() => {
              setIconColor('#1de9b6');
            }}
          />
        </View>
        <View style={styles.TabNavigationBox}>
          {routes.map(route => (
            <Tab
              tab={route}
              style={renderSelection(route.name)}
              // onPress = {}
              key={route.key}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: getHeight() / 8,
    backgroundColor: '#00695c',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    color: '#e0f2f1',
    marginHorizontal: 10,
    marginTop: 15,
  },
  container: {
    width: getWidth(),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  TabNavigationBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  isSelected: {
    borderBottomWidth: 2,
    borderColor: '#1de9b6',
  },
});

export default TabBar;
