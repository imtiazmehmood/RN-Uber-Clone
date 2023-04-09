import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import {setDestination} from '../../slices/navSlice';
import {useNavigation} from '@react-navigation/native';
import NavFavourites from './NavFavourites';
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Imtiiaz</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View style={tw`pt-5`}>
          <GooglePlacesAutocomplete
            minLength={2}
            debounce={400}
            fetchDetails={true}
            placeholder="Where To?"
            nearbyPlacesAPI="GooglePlacesSearch"
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                }),
              );
              navigation.navigate('RideOptionCard');
            }}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'en',
            }}
            styles={toInputBoxStyles}
          />
        </View>
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
  },
  textInput: {
    fontSize: 18,
    borderRadius: 0,
    backgroundColor: '#DDDDDF',
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
