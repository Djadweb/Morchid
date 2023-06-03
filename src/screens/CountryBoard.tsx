import React from 'react';
import {
  Image,
  View,
  Box,
  Text,
  Button,
  Pressable,
  HStack,
  ScrollView,
} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';
import {images} from '../data/images';

const CountryBoard = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {boardList, countryName} = params;

  return (
    <View height="100%" mb={10}>
      <Box height="35%">
        <Image alt="cover" source={images[countryName]} resizeMode="cover" />
        <Text
          fontSize={44}
          color="white"
          position="absolute"
          bottom={2}
          px={5}
          fontWeight={700}
          letterSpacing={3}>
          {countryName}
        </Text>
      </Box>
      <ScrollView
        height="65%"
        position="absolute"
        width="100%"
        bottom={0}
        borderTopRadius={20}
        bg="white"
        pt={2}
        px={6}>
        {boardList.map((item, key) => {
          const icon = images.icons[item.icon];
          const targetScreen = item.screenName;
          return (
            <Pressable
              key={key}
              onPress={() =>
                navigation.navigate(targetScreen, {screenData: item})
              }>
              <HStack
                alignItems="center"
                space={4}
                borderBottomWidth={1}
                borderBottomColor="#D9D9D9"
                py={4}>
                <Image
                  alt="icon"
                  source={icon}
                  width={8}
                  height={8}
                  top="2px"
                />
                <Text fontSize={24} fontWeight={500}>
                  {item.title}
                </Text>
              </HStack>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CountryBoard;
