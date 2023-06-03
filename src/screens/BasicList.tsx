import React from 'react';
import {HStack, Image, Pressable, Text, View} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {images} from '../data/images';

const BasicList = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {screenData} = params;
  const screenTitle = screenData.title;
  const screenItems = screenData.list;
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: 'white',
        height: '100%',
      }}>
      <ScrollView>
        <Text fontSize={30} fontWeight={700} letterSpacing={3}>
          {screenTitle}
        </Text>
        {screenItems.map((item, key) => {
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
                  resizeMode="contain"
                />
                <Text fontSize={24} fontWeight={500}>
                  {item.title}
                </Text>
              </HStack>
            </Pressable>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasicList;
