import React from 'react';
import {Box, Button, Image, Text, View} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View height="100%">
      <Image
        alt="cover"
        source={require('../assets/images/home-cover.png')}
        resizeMode="contain"
      />
      <Box
        height="40%"
        position="absolute"
        width="100%"
        bottom={0}
        borderTopRadius={20}
        bg="white"
        padding={4}>
        <Image
          alt="logo"
          source={require('../assets/images/logo.png')}
          resizeMode="contain"
        />
        <Text p={2} fontSize={30} fontWeight={700} width="90%">
          Prêt pour découvrir l’Algérie !
        </Text>
        <Text px={2} fontSize={18} width="90%" opacity="0.4">
          Nous sommes votre guide
        </Text>
        <Button
          onPress={() => navigation.navigate('Destinations')}
          background="#FFBE58"
          width="300px"
          height="55px"
          borderRadius="15px"
          mx="auto"
          my={5}
          _text={{fontSize: 20, color: 'black', fontWeight: 700}}>
          Commencer
        </Button>
      </Box>
    </View>
  );
};

export default HomeScreen;
