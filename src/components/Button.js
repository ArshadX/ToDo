import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {button} from '../styles/styles';

const Button = ({onPress, iconName, title, disabled}) => {
  return (
    <Pressable
      style={() => [
        disabled ? button.disable : button.enable,
        button.container,
      ]}
      onPress={onPress}
      android_ripple={{radius: 65}}
      disabled={disabled}>
      <Icon name={iconName} size={20} color="#ffffff" />
      <Text style={button.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
