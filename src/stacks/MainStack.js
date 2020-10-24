import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Preload, SignIn, SignUp, Barber} from './../screens';

import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Barber" component={Barber} />
    </Stack.Navigator>
  );
};
