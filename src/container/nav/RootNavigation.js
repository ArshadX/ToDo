import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import dashboard from '../screens/Dashboard';

const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="home"
        component={dashboard}
        options={{
          title: 'Dashboard',
          headerShadowVisible: true,
          headerTitleAlign: 'center',
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
