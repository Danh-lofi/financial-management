/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import HomeScreen from './src/screens/home/HomeScreen';
import { enableScreens } from 'react-native-screens';
import LoginScreen from './src/screens/login/LoginScreen';

enableScreens(true);
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  

  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
