import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { enableScreens } from 'react-native-screens';
import { COLORS } from '../../theme/theme';

enableScreens(true);
const HomeScreen = ({navigation}:any) => {
  useEffect(() => {
    // after 1s, navigate to LoginScreen
    const timeOut = setTimeout(() => {
      navigation.navigate('Login')
    }, 1000);
    () => clearTimeout(timeOut);
  }, []);
  return (
    <View style={styles.ScreenContainer}>
      <Image source={require('../../assets/bg.png')} />
      <Text style={styles.Title}>Finance</Text>
    </View>
  )
}

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
    fontStyle: 'italic'
  },
})

export default HomeScreen