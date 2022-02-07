import React from 'react';

import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {badge} from '../styles/styles';
const Badge = ({onPress, iconName, color}) => {
  return (
    <Pressable onPress={onPress} android_ripple={{radius: 16}}>
      <Icon name={iconName} size={30} color={color} />
    </Pressable>
  );
};

export default Badge;
