import React from 'react';
import {View, Text} from 'react-native';
import {blocks} from '../styles/styles';
import Badge from './Badge';

const Blocks = ({text, onPressIcon, subtitle}) => {
  return (
    <View style={blocks.container}>
      <View>
        <Text style={blocks.textStyle}>{text}</Text>
        <Text style={blocks.subtitle}>{subtitle}</Text>
      </View>
      <Badge onPress={onPressIcon} iconName="minus-circle" color="#000000" />
    </View>
  );
};

export default Blocks;
