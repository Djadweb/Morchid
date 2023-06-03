import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Destinations from './screens/Destinations';
import CountryBoard from './screens/CountryBoard';
import BasicList from './screens/BasicList';
import ArticleScreen from './screens/ArticleScreen';
import GridList from './screens/GridList';
import InfoScreen from './screens/InfoScreen';
import ContactScreen from './screens/ContactScreen';
import SettingScreen from './screens/SettingScreen';
import RNBootSplash from 'react-native-bootsplash';

const navigationRef = createNavigationContainerRef();
const Stack = createStackNavigator();

const hideSplashScreen = () => {
  setTimeout(() => RNBootSplash.hide(), 1000);
};

const App = () => {
  return (
    <NavigationContainer ref={navigationRef} onReady={hideSplashScreen}>
      <NativeBaseProvider>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Destinations"
            component={Destinations}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CountryBoard"
            component={CountryBoard}
            options={{
              headerShown: true,
              title: '',
              headerTransparent: true,
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
            name="BasicList"
            component={BasicList}
            options={{
              headerShown: true,
              title: '',
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="GridList"
            component={GridList}
            options={{
              headerShown: true,
              title: '',
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="ArticleScreen"
            component={ArticleScreen}
            options={{
              headerShown: true,
              title: '',
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="InfoScreen"
            component={InfoScreen}
            options={{
              headerShown: true,
              title: '',
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="ContactScreen"
            component={ContactScreen}
            options={{
              headerShown: true,
              title: '',
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="SettingScreen"
            component={SettingScreen}
            options={{
              headerShown: true,
              title: '',
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
