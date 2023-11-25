
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home/Home';
import { StatusBar, LogBox } from 'react-native';
import { useFonts } from 'expo-font';
import Channels from './Screens/Chanels/Channels';
import Search from './Screens/Search';
import Live from './Screens/Live';


LogBox.ignoreLogs(['new NativeEventEmitter']); 
LogBox.ignoreAllLogs(); 


const Stack = createNativeStackNavigator();

function App() {

  const [fontsLoaded] = useFonts({
    'Cairo-bold': require('./assets/Cairo/static/Cairo-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="channels" component={Channels} />
        <Stack.Screen name="live" component={Live} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;