import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {enableScreens} from 'react-native-screens';
import {COLORS} from '../../theme/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList, AuthStackParamList} from '../../navigation/types';
import {navigate} from '../../services/navigate';
import {useAuthContext} from '../../auth/useAuthContext';
import {SCREENS} from '../../constants/screen.constants';

enableScreens(true);

type Props =
  | NativeStackScreenProps<AuthStackParamList, 'Splash'>
  | NativeStackScreenProps<AppStackParamList, 'Splash'>;

const SplashScreen: React.FC<Props> = ({navigation}) => {
  const {isAuthenticated, isInitialized} = useAuthContext();

  useEffect(() => {
    if (isInitialized) {
      const timeOut = setTimeout(() => {
        if (isAuthenticated) {
          navigate(SCREENS.main.home);
        } else {
          navigate(SCREENS.auth.login);
        }
      }, 1000);
      () => clearTimeout(timeOut);
    }
  }, [isAuthenticated, isInitialized]);
  return (
    <View style={styles.ScreenContainer}>
      <Image source={require('../../assets/bg.png')} />
      <Text style={styles.Title}>Finance</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.primaryLightColor,
    fontStyle: 'italic',
  },
});

export default SplashScreen;
