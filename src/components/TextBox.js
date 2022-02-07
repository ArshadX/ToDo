import React from 'react';
import {TextInput, View} from 'react-native';
import {textArea} from '../styles/styles';

const TextBox = ({onChangeText}) => {
  return (
    <View style={textArea.container}>
      <TextInput
        autoFocus
        placeholder="Enter task..."
        textBreakStrategy="highQuality"
        onChangeText={onChangeText}
        placeholderTextColor="#696969"
        style={textArea.textInput}
      />
    </View>
  );
};

export default TextBox;
