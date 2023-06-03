import {Center, Image} from 'native-base';
import React from 'react';
import {images} from '../data/images';

const SplashScreen = () => {
  return (
    <Center>
      <Image
        alt="icon"
        source={images.SplashScreen}
        width="600px"
        height="120px"
        top="2px"
        resizeMode="contain"
      />
    </Center>
  );
};

export default SplashScreen;
