import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Scanning, Hotel} from './pages';
import {IRoutes} from './@types';
import {Easing} from 'react-native-reanimated';

const Stack = createStackNavigator<IRoutes>();

export default (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          cardShadowEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                delay: 3000,
                duration: 10000,
                easing: Easing.ease,
              },
            },
            close: {
              animation: 'timing',
              config: {
                delay: 3000,
                duration: 10000,
                easing: Easing.bounce,
              },
            },
          },
        }}
      />
      <Stack.Screen name="Scanning" component={Scanning} />
      <Stack.Screen
        name="Hotel"
        component={Hotel}
        options={{
          cardShadowEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          transitionSpec: {
            open: {
              animation: 'spring',
              config: {
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true,
                restDisplacementThreshold: 0.01,
                restSpeedThreshold: 0.01,
              },
            },
            close: {
              animation: 'spring',
              config: {
                stiffness: 2000,
                damping: 1000,
                mass: 4,
                overshootClamping: true,
                restDisplacementThreshold: 0.4,
                restSpeedThreshold: 0.4,
              },
            },
          },
        }}
      />
    </Stack.Navigator>
  );
};
