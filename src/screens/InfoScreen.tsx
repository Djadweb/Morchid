import {useNavigation, useRoute} from '@react-navigation/native';
import {Box, HStack, Image, ScrollView, Text} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../data/images';

const InfoScreen = () => {
  const {params} = useRoute();
  const {screenData} = params;
  const screenTitle = screenData.title;
  const data = screenData.data;
  const starCount = data?.stars;
  const address = data?.address;
  const cover = images[data.image];
  const first_description_title = data?.first_description_title;
  const first_description_text = data?.first_description_text;
  const second_description_title = data?.second_description_title;
  const second_description_text = data?.second_description_text;
  const third_description_title = data?.third_description_title;
  const third_description_text = data?.third_description_text;
  const map_image = images[data?.map_image];
  const infoImage = images[data?.infoImage];
  const infoImageTitle = data?.infoImageTitle;
  return (
    <SafeAreaView
      style={{
        paddingTop: 40,
        backgroundColor: 'white',
        height: '100%',
      }}>
      <ScrollView mt={2} height="100%">
        <Text px={5} fontSize={30} fontWeight={700}>
          {screenTitle}
        </Text>
        <HStack px={5} ml={1} width="100%">
          {starCount &&
            [...Array(starCount)]?.map(() => <Text fontSize={18}>⭐</Text>)}
        </HStack>
        <Text px={5} ml={1} top={2} opacity={0.5} width="70%">
          {address}
        </Text>
        <Image
          alt="icon"
          source={cover}
          width="100%"
          height="300px"
          resizeMode="contain"
        />
        {first_description_title && (
          <Box pb={5}>
            <Text px={4} fontSize={20} fontWeight={600}>
              {first_description_title}
            </Text>
            <Text px={5} pb={6} pt={2} fontSize={14}>
              {first_description_text}
            </Text>
            <Box shadow={1} borderBottomWidth={8} borderBottomColor="#D9D9D9" />
          </Box>
        )}

        {infoImage && (
          <>
            <Text px={4} fontSize={20} fontWeight={600}>
              {infoImageTitle}
            </Text>
            <Image
              alt="icon"
              source={infoImage}
              width="100%"
              height="180px"
              resizeMode="cover"
              mb={5}
            />
            <Box shadow={1} borderBottomWidth={8} borderBottomColor="#D9D9D9" />
          </>
        )}

        {second_description_title && (
          <Box pb={5} pt={4}>
            <Text px={4} pb={3} fontSize={20} fontWeight={600}>
              {second_description_title}
            </Text>
            <Text px={5} pb={6} fontSize={14}>
              {second_description_text}
            </Text>
            <Box shadow={1} borderBottomWidth={8} borderBottomColor="#D9D9D9" />
          </Box>
        )}

        {third_description_title && (
          <Box>
            <Text px={4} fontSize={20} fontWeight={600}>
              {third_description_title}
            </Text>
            <Text px={5} pt={2} pb={6} fontSize={14}>
              {third_description_text}
            </Text>
          </Box>
        )}

        {map_image && (
          <Image
            alt="icon"
            source={map_image}
            width="100%"
            height="150px"
            resizeMode="cover"
            mb={5}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
