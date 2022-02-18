import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Layout,
  BounceInUp,
  BounceOutUp,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import useStyles from './Home.style';
import {
  Marker,
  Profile,
  Search,
  FavoritePlaces,
  Parks,
  Blur,
  Hotel,
  HotelIcon,
  ArrowLeft,
  IconScan,
} from '../../assets';
import {IRoutes} from '../../@types';

const DATA = [0, 1];

type HomeStackPros = StackNavigationProp<IRoutes, 'Hotel'>;

const Home = (): JSX.Element => {
  const styles = useStyles();

  const {navigate} = useNavigation<HomeStackPros>();

  const handleOpenHotel = () => navigate('Hotel');

  const CardFavorite = () => {
    return (
      <Animated.View
        style={styles.cardFavorite}
        entering={BounceInUp}
        exiting={BounceOutUp}
        layout={Layout}>
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

              <Pressable style={styles.buttonDetail} onPress={handleOpenHotel}>
                <Text style={styles.buttonDetailText}>Detail</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Animated.View>
    );
  };

  const CardNearestPlaces = () => {
    return (
      <View style={styles.viewCardNearest}>
        <View style={styles.viewCardStreet}>
          <Image source={Hotel} style={styles.cardImageHotel} />
          <View style={styles.cardDescription}>
            <View style={styles.cardViewDescription}>
              <HotelIcon />
              <Text style={styles.cardDescriptionText}>Roayl Albert Hotel</Text>
            </View>
            <Text style={styles.cardStreetText}>231 East 95th Street, HK</Text>
          </View>
        </View>

        <View>
          <Text style={styles.cardStreetTextMi}>2.8 mi</Text>

          <Pressable style={styles.cardStreetButton}>
            <ArrowLeft />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
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

        <View>
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

        <View>
          <Text style={styles.textFavorite}>Nearest Places</Text>

          <FlatList data={DATA} renderItem={() => <CardNearestPlaces />} />
        </View>

        <Pressable style={styles.buttonScan}>
          <IconScan />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Home;
