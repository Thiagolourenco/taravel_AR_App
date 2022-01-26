import React from 'react';
import {Svg, Path} from 'react-native-svg';

interface IMarker {
  color?: string;
}

export default ({color}: IMarker): JSX.Element => {
  return (
    <Svg width="14" height="16" viewBox="0 0 14 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.54545 16C6.54545 16 13.0909 11.6364 13.0909 6.54545C13.0909 4.80949 12.4013 3.14463 11.1738 1.91712C9.94628 0.689608 8.28142 0 6.54545 0C4.80949 0 3.14463 0.689608 1.91712 1.91712C0.689608 3.14463 0 4.80949 0 6.54545C0 11.6364 6.54545 16 6.54545 16ZM8.72728 6.54544C8.72728 7.75042 7.75045 8.72725 6.54546 8.72725C5.34048 8.72725 4.36364 7.75042 4.36364 6.54544C4.36364 5.34045 5.34048 4.36362 6.54546 4.36362C7.75045 4.36362 8.72728 5.34045 8.72728 6.54544Z"
        fill={color}
      />
    </Svg>
  );
};
