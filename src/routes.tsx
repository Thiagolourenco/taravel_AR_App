import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Scanning, Hotel} from './pages';
import {IRoutes} from './@types';

const Stack = createStackNavigator<IRoutes>();

export default (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Scanning" component={Scanning} />
      <Stack.Screen name="Hotel" component={Hotel} />
    </Stack.Navigator>
  );
};
