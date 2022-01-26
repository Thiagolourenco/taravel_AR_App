import React from 'react';
import {View, Text, Image, TextInput, FlatList, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import useStyles from './Home.style';
import {
  Marker,
  Profile,
  Search,
  FavoritePlaces,
  Parks,
  Blur,
} from '../../assets';

const DATA = [0, 1];
const Home = (): JSX.Element => {
  const styles = useStyles();

  const CardFavorite = () => {
    return (
      <View style={styles.cardFavorite}>
        <Image source={FavoritePlaces} style={styles.imageCard} />
        <View style={styles.viewParks}>
          <Parks />
          <Text style={styles.viewParksText}>Parks</Text>
        </View>

        <View style={styles.viewDetailPark}>
          <Image source={Blur} blurRadius={20} style={styles.imageDetail} />

          <View style={styles.viewTextDatail}>
            <Text style={styles.viewTextDetailTitle}>Liconln Park</Text>

            <View style={styles.viewStreet}>
              <Marker color="rgba(17,20,23,0.2)" />
              <Text style={styles.viewStreetText}>34 West 57th Street, PH</Text>
            </View>

            <View style={styles.viewDetail}>
              <Text style={styles.textMin}>9.8 mi</Text>

              <Pressable style={styles.buttonDetail}>
                <Text style={styles.buttonDetailText}>Detail</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          start={{x: 1, y: 1}}
          end={{x: 1, y: 1}}
          colors={['#111417', '#45BFE4', '#E6F2F4']}
          style={styles.viewCity}>
          <Marker color="#45BFE4" />
          <Text style={styles.viewCityText}>Chicago, USA</Text>
        </LinearGradient>

        <Image style={styles.image_profile} source={Profile} />
      </View>

      <Text style={styles.title}>Welcome to USA, Georgina!</Text>

      <LinearGradient
        start={{x: 1, y: 1}}
        end={{x: 1, y: 1}}
        colors={['#111417', '#45BFE4', '#E6F2F4']}
        style={styles.viewInput}>
        <TextInput placeholder="Search places ..." />
        <Search />
      </LinearGradient>

      <Text style={styles.textFavorite}>Favorite Places</Text>

      <FlatList
        data={DATA}
        contentContainerStyle={styles.listCard}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={key => String(key)}
        renderItem={() => <CardFavorite />}
      />
    </View>
  );
};

export default Home;
