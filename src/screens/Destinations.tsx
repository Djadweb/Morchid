import React from 'react';
import {Image, Pressable, Text} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import * as data from '../data/data.json';
import {images} from '../data/images';

const Destinations = () => {
  const navigation = useNavigation();
  const countries = data[0].Countries;

  return (
    <SafeAreaView style={{paddingHorizontal: 20}}>
      <Text fontSize={28} fontWeight={700} py={5}>
        Destinations
      </Text>
      {countries.map((item: any, key: any) => {
        const countryName = item[key].name;
        const countryImage = images[item[key].image];
        const boardList = item[key].BoardList;
        return (
          <Pressable
            key={key}
            height="150px"
            width="150px"
            p={2}
            onPress={() =>
              navigation.navigate('CountryBoard', {
                boardList: boardList,
                countryName,
              })
            }>
            <Image
              borderRadius="15px"
              width="100%"
              height="100%"
              alt="logo"
              source={countryImage}
              resizeMode="contain"
            />
            <Text fontSize={22} fontWeight={500} pt={2} mx="auto">
              {countryName}
            </Text>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};

export default Destinations;
