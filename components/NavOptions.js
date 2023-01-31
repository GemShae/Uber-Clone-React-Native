import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';

const data = [
  {
    id: '123',
    title: 'Book a ride',
    image: require('../assets/journey.png'),
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Browse transfers',
    image: require('../assets/destination.png'),
    screen: 'TransfersScreen',
  },
];

const NavOptions = () => {
  return (
    <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image 
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
              source={ item.image } 
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon 
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name='arrowright' color='white' type='antdesign'/>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
