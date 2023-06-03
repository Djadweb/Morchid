import React from 'react';
import {HStack, Image, Pressable, Text, View} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../data/images';
import {Linking} from 'react-native';

const SettingScreen = () => {
  return (
    <SafeAreaView>
      <Text mt={12} px={5} fontSize={30} fontWeight={700}>
        Paramètres
      </Text>
      <View
        borderBottomWidth={1}
        borderBottomColor="#D9D9D9"
        w="100%"
        mx="auto"
        borderRadius={10}
        p={3}>
        <Pressable px={10}>
          <Text fontSize={24} fontWeight={500}>
            Français
          </Text>
        </Pressable>
      </View>
      <View
        borderBottomWidth={1}
        borderBottomColor="#D9D9D9"
        w="100%"
        mx="auto"
        borderRadius={10}
        p={3}>
        <Pressable px={10}>
          <Text fontSize={24} fontWeight={500}>
            Anglais
          </Text>
        </Pressable>
      </View>
      <View
        borderBottomWidth={1}
        borderBottomColor="#D9D9D9"
        w="100%"
        mx="auto"
        borderRadius={10}
        p={3}>
        <Pressable px={10}>
          <Text fontSize={26} fontWeight={500} textAlign="left">
            عربية
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
