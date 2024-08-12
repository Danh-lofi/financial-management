import {faLock, faPhone} from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../components/button/CustomButton';
import FormInput from '../../components/input/FormInput';
import {COLORS, FONT_SIZE} from '../../theme/theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/types';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

const RegisterScreen: React.FC<Props> = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isInvalidPhone, setIsInvalidPhone] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const changeUsernameHandle = (text: string) => {
    setUsername(text);
  };
  const changePasswordHandle = (text: string) => {
    setPassword(text);
  };

  const registerHandle = () => {
    setLoading(true);
    // check validate
    if (_.isEmpty(username) || !username.match(/^[0-9]{10}$/)) {
      setIsInvalidPhone(true);
      setLoading(false);
      return;
    }
    setLoading(false);
  };
  return (
    <View style={styles.ScreenContainer}>
      <View style={styles.SectionContainer}>
        <View style={{flex: 3, flexDirection: 'column', paddingVertical: 20}}>
          {/* <Image source={require('../../assets/logo.png')} /> */}
          <Text style={styles.WelcomeText}>Đăng ký</Text>
          <Text style={styles.WelcomeSubText}>
            Đăng ký tài khoản và tham gia trải nghiệm cùng QT!
          </Text>
        </View>
        <View style={{flex: 8, marginTop: 20}}>
          {/* INPUT */}
          <View>
            <View>
              <FormInput
                icon={faPhone}
                value={username}
                onChangeText={changeUsernameHandle}
                placeholder="Số điện thoại"
              />
            </View>
            <View style={{paddingTop: 20}}>
              <FormInput
                icon={faLock}
                value={password}
                onChangeText={changePasswordHandle}
                placeholder="Mật khẩu"
                isPassword
              />
            </View>
            <View style={{paddingTop: 20}}>
              <FormInput
                icon={faLock}
                value={password}
                onChangeText={changePasswordHandle}
                placeholder="Xác nhận mật khẩu"
                isPassword
              />
            </View>
            {/* <View>
              <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
            </View> */}
          </View>
          {/* BUTTON */}
          <View style={{flex: 1, alignItems: 'center', marginTop: 50}}>
            <View style={{width: 300}}>
              <CustomButton
                title="Đăng ký"
                onPress={registerHandle}
                isLoading={loading}
              />
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.registerQ}>
            Bạn đã có tài khoản?
            <Text
              style={styles.registerL}
              onPress={() => navigation.navigate('Login')}>
              {' '}
              Đăng nhập
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    flexDirection: 'column',
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
    textAlign: 'center',
  },
  WelcomeSubText: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.secondaryLightColor,
    lineHeight: 25,
    marginTop: 20,
    // width: 200,
    textAlign: 'center',
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

export default RegisterScreen;
