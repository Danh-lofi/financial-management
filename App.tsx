import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import React, {useRef} from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import HomeScreen from './src/screens/home/HomeScreen';
import LoginScreen from './src/screens/login/LoginScreen';
import RegisterScreen from './src/screens/register/RegisterScreen';
//redux
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './src/redux/store';
import {setNavigationRef} from './src/services/navigate';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();
enableScreens(true);
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const navigationRef = useRef(null);
  setNavigationRef(navigationRef);
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
