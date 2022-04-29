import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {getHeight, getWidth} from '../../utils/dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Tab from './Tab';

const TabBar = ({state, navigation}) => {
  const {routes} = state;
  const [selected, setSelected] = useState('Home');
  const [iconColor, setIconColor] = useState('#fff');

  const renderSelection = currentTab =>
    currentTab === selected ? styles.isSelected : null;

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.menuSection}>
        <Text style={styles.header}>Whatsapp</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-v" size={18} color={'#FFF'} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View>
          <Icon
            name="camera"
            size={15}
            color={iconColor}
            onPress={() => {
              setIconColor('#1de9b6');
              handlePress();
            }}
          />
        </View>
        <View style={styles.TabNavigationBox}>
          {routes.map((route, index) => (
            <Tab
              tab={route}
              style={renderSelection(route.name)}
              onPress={() => handlePress(route.name, index)}
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
  menuSection: {
    flexDirection: 'row',
    width: getWidth(),
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    color: '#e0f2f1',
  },
  container: {
    width: getWidth(),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  TabNavigationBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  isSelected: {
    borderBottomWidth: 2,
    borderColor: '#1de9b6',
    color: '#1de9b6',
  },
});

export default TabBar;
