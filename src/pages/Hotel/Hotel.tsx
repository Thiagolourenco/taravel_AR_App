import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import {HotelBackground} from '../../assets';

const Hotel = (): JSX.Element => {
  return (
    <ImageBackground source={HotelBackground} style={{flex: 1}}>
      <Text>Home</Text>
    </ImageBackground>
  );
};

export default Hotel;
