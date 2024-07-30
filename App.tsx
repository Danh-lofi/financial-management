import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import HomeScreen from './src/screens/home/HomeScreen';
import {enableScreens} from 'react-native-screens';
import LoginScreen from './src/screens/login/LoginScreen';
import RegisterScreen from './src/screens/register/RegisterScreen';
import {NativeBaseProvider} from 'native-base';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();
enableScreens(true);
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    // <RootStack.Navigator initialRouteName="Login">
    //   <RootStack.Screen name="Login" component={LoginScreen} />
    //   <RootStack.Screen name="Register" component={RegisterScreen} />
    //   </RootStack.Navigator>
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
