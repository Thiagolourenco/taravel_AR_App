import React from 'react';
import {Svg, Path} from 'react-native-svg';

export default () => {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        d="M1 7H13"
        stroke="#45BFE4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 1L13 7L7 13"
        stroke="#45BFE4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
