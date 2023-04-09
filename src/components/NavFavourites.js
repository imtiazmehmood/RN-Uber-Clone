import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/base';
import tw from 'twrnc';
const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, London, US',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'London Eye, London, US',
  },
];
const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => {
        return <View style={[tw`bg-gray-200`, {height: 0.5}]}></View>;
      }}
      renderItem={({item: {location, destination, icon}, item}) => {
        return (
          <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
              name={icon}
              type="ionicon"
              color="white"
              size={18}
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            />
            <View>
              <Text style={tw`font-semibold text-lg`}>{location}</Text>
              <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
