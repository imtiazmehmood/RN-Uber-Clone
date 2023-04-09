import React, {useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import tw from 'twrnc';
import {useDispatch, useSelector} from 'react-redux';
import {GOOGLE_MAPS_API_KEY} from '@env';

import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from '../../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {Platform} from 'react-native';
const MapsView = () => {
  const dispatch = useDispatch();
  const maRef = useRef(null);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  useEffect(() => {
    if (!origin || !destination) return;

    //Zoom & fit to markers
    maRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {top: 50, bottom: 50, left: 50},
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`,
      )
        .then(res => res.json())
        .then(data => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        });
    };

    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_API_KEY]);

  return (
    <MapView
      ref={maRef}
      style={tw`flex-1`}
      zoomEnabled={true}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      mapType={Platform.OS === 'ios' ? 'mutedStandard' : 'standard'}
      // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default MapsView;
