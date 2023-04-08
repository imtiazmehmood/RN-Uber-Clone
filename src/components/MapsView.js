import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import tw from 'twrnc';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../../slices/navSlice';

const MapsView = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      // mapType="mutedStandard"
      // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
    ></MapView>
  );
};

export default MapsView;
