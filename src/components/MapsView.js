import React, {useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import tw from 'twrnc';
import {useSelector} from 'react-redux';
import {GOOGLE_MAPS_API_KEY} from '@env';

import {selectDestination, selectOrigin} from '../../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
const MapsView = () => {
  const maRef = useRef(null);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  useEffect(() => {
    if (!origin || !destination) return;
    maRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {top: 50, bottom: 50, left: 50},
    });
  }, [origin, destination]);
  return (
    <MapView
      ref={maRef}
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      // mapType="mutedStandard"
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
