import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import MapsView from '../components/MapsView';
const MapScreen = () => {
  return (
    <View>
      <Text>MapScreen</Text>
      <View style={tw`h-1/2`}>
        <MapsView />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;
