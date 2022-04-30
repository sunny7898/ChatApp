import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default MenuBar = ({data}) => {
  return (
    <Menu style={{position: 'absolute', right: 10}}>
      <MenuTrigger>
        <Icon name="ellipsis-v" color={'#FFF'} size={15} />
      </MenuTrigger>
      <MenuOptions style={{backgroundColor: '#004d40'}}>
        {data.map(label => (
          <MenuOption onSelect={() => alert(label)} key={label}>
            <Text style={{color: '#fff'}}>{label}</Text>
          </MenuOption>
        ))}
      </MenuOptions>
    </Menu>
  );
};
