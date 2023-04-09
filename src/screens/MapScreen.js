import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import MapsView from '../components/MapsView';
import {createStackNavigator} from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionCard from '../components/RideOptionCard';
import {Icon} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
const MapScreen = () => {
  const navigation = useNavigation();
  const CardStack = createStackNavigator();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={tw`bg-gray-100 absolute top-10 left-6 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" />
      </TouchableOpacity>
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
