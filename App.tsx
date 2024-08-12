import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React, {useRef} from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
//redux
import {Provider as ReduxProvider} from 'react-redux';
import {AuthProvider} from './src/auth/JWTContext';
import RootNavigator from './src/navigation/RootNavigator';
import {store} from './src/redux/store';
import {setNavigationRef} from './src/services/navigate';

enableScreens(true);
function App(): JSX.Element {
  const navigationRef = useRef(null);
  setNavigationRef(navigationRef);
  return (
    <AuthProvider>
      <ReduxProvider store={store}>
        <NativeBaseProvider>
          <NavigationContainer ref={navigationRef}>
            <RootNavigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </ReduxProvider>
    </AuthProvider>
  );
}

export default App;
