import React from 'react';

import {View, Text} from 'react-native';
import {badge, modal} from '../styles/styles';
import Badge from './Badge';
import Button from './Button';
import TextBox from './TextBox';

const ModalContainer = ({
  onCrossPress,
  onPressButton,
  onChangeText,
  buttonDisable,
}) => {
  return (
    <View style={modal.root}>
      <View style={modal.container}>
        <View style={badge.container}>
          <Badge onPress={onCrossPress} iconName="x" color="#ffffff" />
        </View>
        <View style={modal.box}>
          <Text style={modal.textStyle}>Task</Text>
          <TextBox onChangeText={onChangeText} />
        </View>
        <View style={modal.actions}>
          <Button
            onPress={onPressButton}
            title="Add task"
            disabled={buttonDisable}
          />
        </View>
      </View>
    </View>
  );
};

export default ModalContainer;
