import React from 'react';
import {Alert} from 'react-native';
export const Alertbox = (title, details, func, funcValue) =>
  Alert.alert(title, details, [
    {text: 'OK', onPress: () => func(funcValue)},
    {text: 'Cancel', onPress: () => console.log('Cancled')},
  ]);
