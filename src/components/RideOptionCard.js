import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {Icon} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {selectTravelTimeInformation} from '../../slices/navSlice';
const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    surcharge: 1.5,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    surcharge: 1.5,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    surcharge: 1.5,
    image: 'https://links.papareact.com/7pf',
  },
];
export default function RideOptionCard() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const traveTimeInformation = useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView style={tw`bg-white  flex-grow`}>
      <FlatList
        data={data}
        key={item => item.id}
        ListHeaderComponent={() => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('NavigateCard')}
                style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
                <Icon name="chevron-left" type="font-awesome" />
              </TouchableOpacity>
              <Text style={tw`text-center py-5 text-xl`}>
                Select a Ride - {traveTimeInformation?.distance?.text}
              </Text>
            </View>
          );
        }}
        renderItem={({
          item: {image, id, title, multiplier, surcharge},
          item,
        }) => {
          return (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              style={tw`flex-row justify-between items-center px-5 ${
                id === selected?.id && 'bg-gray-200'
              }`}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain',
                }}
                source={{uri: image}}
              />
              <View style={tw`-ml-5`}>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>{traveTimeInformation?.duration?.text} Travel Time.</Text>
              </View>
              <Text style={tw`text-xl`}>
                {new Intl.NumberFormat('en-gb', {
                  style: 'currency',
                  currency: 'PKR',
                }).format(
                  (traveTimeInformation?.duration?.value *
                    surcharge *
                    multiplier) /
                    100,
                )}
              </Text>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={() => {
          return (
            <View style={tw`mt-auto border-t border-gray-200`}>
              <TouchableOpacity
                disabled={!selected}
                style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
                <Text style={tw`text-center text-white text-xl`}>
                  Choose {selected?.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
