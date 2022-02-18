import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IHomeStyle {
  buttonScan: ViewStyle;
  container: ViewStyle;
  header: ViewStyle;
  image_profile: ImageStyle;
  viewCity: ViewStyle;
  viewCityText: TextStyle;
  title: TextStyle;
  viewInput: ViewStyle;
  textFavorite: TextStyle;
  cardFavorite: ImageStyle;
  imageCard: ImageStyle;
  viewParks: ViewStyle;
  viewParksText: TextStyle;
  imageDetail: ImageStyle;
  viewDetailPark: ViewStyle;
  viewTextDatail: ViewStyle;
  viewTextDetailTitle: TextStyle;
  viewStreet: ViewStyle;
  viewStreetText: TextStyle;
  viewDetail: ViewStyle;
  buttonDetail: ViewStyle;
  buttonDetailText: TextStyle;
  textMin: TextStyle;
  listCard: ViewStyle;

  viewCardNearest: ViewStyle;
  viewCardStreet: ViewStyle;
  cardDescription: ViewStyle;
  cardDescriptionText: TextStyle;
  cardViewDescription: ViewStyle;
  cardStreetText: TextStyle;
  cardStreetButton: ViewStyle;
  cardStreetTextMi: TextStyle;
  cardImageHotel: ImageStyle;
}

export default (): IHomeStyle => {
  return StyleSheet.create({
    buttonScan: {
      backgroundColor: '#45BFE4',
      width: 69,
      height: 69,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 19,

      position: 'absolute',
      right: 22,
      bottom: 32,

      shadowColor: 'rgba(69, 191, 228, 0.5)',
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,

      elevation: 23,
    },
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 32,
      marginTop: 32,
    },
    image_profile: {
      width: 46,
      height: 46,
      borderRadius: 15,
      shadowColor: '#111417',
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,

      elevation: 23,
    },
    viewCity: {
      width: 131,
      height: 44,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewCityText: {
      fontSize: 14,
      color: '#111417',
      marginLeft: 4,
    },
    title: {
      fontSize: 28,
      color: '#111417',
      fontWeight: 'bold',
      marginHorizontal: 32,
      marginVertical: 32,
    },
    viewInput: {
      flexDirection: 'row',
      marginHorizontal: 24,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 14,
      borderRadius: 8,
    },
    textFavorite: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginHorizontal: 32,
      color: '#111417',
    },
    cardFavorite: {
      marginRight: 12,
      borderRadius: 50,
      height: 270,
      width: 215,
      marginTop: 10,
      shadowColor: '#ccc',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
    imageCard: {
      position: 'absolute',
    },
    viewParks: {
      backgroundColor: 'rgba(0,0,0,0.1)',
      width: 64,
      height: 29,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
      margin: 15,
      borderRadius: 8,
    },
    viewParksText: {
      fontSize: 12,
      color: '#fff',
      marginLeft: 4,
    },
    imageDetail: {
      borderRadius: 20,
      marginRight: 5,
    },
    viewDetailPark: {
      alignSelf: 'center',
      position: 'absolute',
      bottom: 30,
    },
    viewTextDatail: {
      position: 'absolute',
      margin: 10,
    },
    viewTextDetailTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#111417',
    },
    viewStreet: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4,
    },
    viewStreetText: {
      fontSize: 14,
      color: '#111417',
      marginLeft: 4,
    },
    viewDetail: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 14,
      alignItems: 'center',
    },
    buttonDetail: {
      backgroundColor: '#fff',
      height: 29,
      width: 59,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonDetailText: {
      fontSize: 14,
      fontWeight: '700',
      color: '#45BFE4',
    },
    textMin: {
      fontSize: 12,
      color: '#111417',
    },
    listCard: {
      paddingLeft: 32,
      paddingRight: 12,
    },

    viewCardNearest: {
      backgroundColor: '#fff',
      marginHorizontal: 32,
      marginTop: 12,
      borderRadius: 12,
      paddingVertical: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 8,
    },
    viewCardStreet: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardDescription: {
      marginLeft: 12,
    },
    cardImageHotel: {
      shadowColor: '#ccc',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
    cardDescriptionText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#111417',
      marginLeft: 4,
    },
    cardViewDescription: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardStreetText: {
      fontSize: 12,
      marginTop: 4,
    },
    cardStreetButton: {
      backgroundColor: '#DFF3F9',
      justifyContent: 'center',
      alignItems: 'center',
      height: 32,
      width: 32,
      borderRadius: 6,
      marginTop: 22,
    },
    cardStreetTextMi: {
      fontSize: 12,
      color: '#111417',
    },
  });
};
