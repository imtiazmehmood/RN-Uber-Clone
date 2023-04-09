import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import MapsView from '../components/MapsView';
import {createStackNavigator} from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionCard from '../components/RideOptionCard';
const MapScreen = () => {
  const CardStack = createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <MapsView />
      </View>
      <View style={tw`h-1/2`}>
        <CardStack.Navigator screenOptions={{headerShown: false}}>
          <CardStack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{headerShown: false}}
          />
          <CardStack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{headerShown: false}}
          />
        </CardStack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
