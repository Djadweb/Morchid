import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, ScrollView, Text} from 'native-base';
import {images} from '../data/images';

const ArticleScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const {screenData} = params;
  const screenTitle = screenData.title;
  const articleData = screenData.articleData;
  const articleText = articleData.articleText;
  const image = images[articleData.image];
  return (
    <SafeAreaView
      style={{
        paddingTop: 50,
        backgroundColor: 'white',
        height: '100%',
      }}>
      <ScrollView>
        <Text fontSize={30} fontWeight={700} letterSpacing={3} ml={4}>
          {screenTitle}
        </Text>
        <Image
          alt="article-image"
          source={image}
          width="100%"
          height={300}
          top="2px"
          resizeMode="contain"
        />
        <Text px={4} fontSize={18} fontWeight={600} py={4}>{articleText}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArticleScreen;
