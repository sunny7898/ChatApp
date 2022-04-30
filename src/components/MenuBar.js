import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useNavigation} from '@react-navigation/native';

export default MenuBar = ({data, onSelect}) => {
  const navigation = useNavigation();
  return (
    <Menu style={{position: 'absolute', right: 25}}>
      <MenuTrigger>
        <Icon name="ellipsis-v" color={'#FFF'} size={15} />
      </MenuTrigger>
      <MenuOptions style={{backgroundColor: '#004d40'}}>
        {data.map(screen => (
          <MenuOption
            onSelect={() => navigation.navigate(screen.toNavigate)}
            key={screen.toNavigate}>
            <Text style={{color: '#fff'}}>{screen.label}</Text>
          </MenuOption>
        ))}
      </MenuOptions>
    </Menu>
  );
};
