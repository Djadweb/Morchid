import React from 'react';
import {HStack, Image, Pressable, Text, View} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../data/images';
import {Linking} from 'react-native';

const ContactScreen = () => {
  const email = images.icons.email;
  const phone = images.icons.phone;
  const twitter = images.icons.twitter;
  return (
    <SafeAreaView
      style={{
        paddingTop: 40,
        backgroundColor: 'white',
        height: '100%',
      }}>
      <Text mt={2} px={5} fontSize={30} fontWeight={700}>
        Contact
      </Text>
      <View
        mt={10}
        minHeight="180px"
        bg="rgba(0, 0, 0, 0.08)"
        w="90%"
        mx="auto"
        borderRadius={10}
        p={3}>
        <Pressable
          w="100%"
          h="45px"
          bg="white"
          borderWidth={2}
          borderRadius={8}
          px={2}
          onPress={() => Linking.openURL('mailto:wilayatlemcen@gmail.com')}>
          <HStack alignItems="center" space={4} h="100%">
            <Image alt="icon" source={email} size={7} resizeMode="contain" />
            <Text fontSize={17}>wilayatlemcen@gmail.com</Text>
          </HStack>
        </Pressable>
        <Pressable
          w="100%"
          h="45px"
          bg="white"
          borderWidth={2}
          borderRadius={8}
          px={2}
          my={3}
          onPress={() => Linking.openURL('tel:+213 784 202 627')}>
          <HStack alignItems="center" space={4} h="100%">
            <Image alt="icon" source={phone} size={7} resizeMode="contain" />
            <Text fontSize={17}>+213 784 202 627</Text>
          </HStack>
        </Pressable>
        <Pressable
          w="100%"
          h="45px"
          bg="white"
          borderWidth={2}
          borderRadius={8}
          px={2}
          onPress={() => Linking.openURL('https://twitter.com/wilayatlemcen')}>
          <HStack alignItems="center" space={4} h="100%">
            <Image alt="icon" source={twitter} size={7} resizeMode="contain" />
            <Text fontSize={17}>twitter.com/wilayatlemcen</Text>
          </HStack>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;
