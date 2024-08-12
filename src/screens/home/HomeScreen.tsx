import {NativeStackScreenProps} from '@react-navigation/native-stack';
import _ from 'lodash';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAuthContext} from '../../auth/useAuthContext';
import {AppStackParamList} from '../../navigation/types';
import {COLORS, FONT_SIZE} from '../../theme/theme';

type Props = NativeStackScreenProps<AppStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#fff'}}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSwitchIcon: {
    // fontSize: FONT_SIZE.extraLarge,
    // height: 50,
    // width: 50,
    // color: '#183153',
  },
  buttonSwitchActive: {
    color: COLORS.backgroundBtn,
  },
  buttonSwitch: {},
  switchContainer: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: '#183153',
  },
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  SectionContainer: {
    padding: 20,
    flex: 1,
  },
  Title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.primaryLightColor,
    fontStyle: 'italic',
  },
  WelcomeText: {
    fontSize: FONT_SIZE.extraLarge,
    color: COLORS.primaryLightColor,
    fontWeight: 'bold',
    marginTop: 10,
  },
  WelcomeSubText: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.secondaryLightColor,
    lineHeight: 25,
    marginTop: 20,
    width: 300,
  },
  forgotPassword: {
    fontSize: FONT_SIZE.small,
    color: COLORS.secondaryLightColor,
    textAlign: 'right',
    marginTop: 10,
    fontWeight: 'bold',
  },
  registerQ: {
    fontSize: FONT_SIZE.small,
    color: COLORS.secondaryLightColor,
    textAlign: 'center',
    marginTop: 10,
  },
  registerL: {
    fontSize: FONT_SIZE.small,
    color: COLORS.mainColor,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
