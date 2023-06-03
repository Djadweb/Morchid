import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Box,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../data/images';

const GridList = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {screenData} = params;
  const screenTitle = screenData.title;
  const screenItems = screenData.list;
  return (
    <SafeAreaView
      style={{
        paddingVertical: 40,
        backgroundColor: 'white',
        height: '100%',
      }}>
      <ScrollView>
        <Text fontSize={30} fontWeight={700} px={5}>
          {screenTitle}
        </Text>
        {screenItems.map((item, key) => {
          const cover = images[item.image];
          const targetScreen = item.screenName;
          const starCount = item?.data?.stars;
          const address = item?.data?.address;
          const subtitle = item?.data?.subtitle;
          return (
            <Pressable
              key={key}
              onPress={() =>
                navigation.navigate(targetScreen, {screenData: item})
              }>
              <HStack space={2} py={4} px={2} minH="150px">
                <Image
                  alt="icon"
                  source={cover}
                  width="120px"
                  height="120px"
                  top="2px"
                  resizeMode="contain"
                />
                <VStack>
                  <Text fontSize={24} fontWeight={500} maxW="95%">
                    {item.title}
                  </Text>
                  <HStack ml={1} width="100%">
                    {starCount &&
                      [...Array(starCount)]?.map(() => (
                        <Text fontSize={18}>⭐</Text>
                      ))}
                  </HStack>
                  {subtitle && (
                    <Text ml={1} opacity={0.7} width="100%">
                      {subtitle}
                    </Text>
                  )}
                  <Text ml={1} top={2} opacity={0.5} width="70%">
                    {address}
                  </Text>
                </VStack>
              </HStack>
              <Box
                shadow={1}
                borderBottomWidth={8}
                borderBottomColor="#D9D9D9"
              />
            </Pressable>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GridList;
