import {StyleSheet, ViewStyle} from 'react-native';

interface IScanningStyle {
  container: ViewStyle;
}

export default (): IScanningStyle => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};
