import {StyleSheet, ViewStyle} from 'react-native';

interface IHotelStyle {
  container: ViewStyle;
}

export default (): IHotelStyle => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};
