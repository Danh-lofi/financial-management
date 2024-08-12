import {faKeyboard, faLock, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import _ from 'lodash';
import {ScrollView} from 'native-base';
import {useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAuthContext} from '../../auth/useAuthContext';
import CustomButton from '../../components/button/CustomButton';
import FormInput from '../../components/input/FormInput';
import {AuthStackParamList} from '../../navigation/types';
import {COLORS, FONT_SIZE} from '../../theme/theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const {login} = useAuthContext();
  const [username, setUsername] = useState<string>('');
  const [isInvalidPhone, setIsInvalidPhone] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [isOTP, setIsOTP] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const changeIsOTPHandle = (value: boolean) => setIsOTP(value);

  const changeUsernameHandle = (text: string) => {
    if (isInvalidPhone) {
      setIsInvalidPhone(false);
    }
    setUsername(text);
  };
  const changePasswordHandle = (text: string) => {
    setPassword(text);
  };

  const loginHandle = async () => {
    setLoading(true);

    if (_.isEmpty(username) || !username.match(/^[0-9]{10}$/)) {
      setIsInvalidPhone(true);
      setLoading(false);
      return;
    }
    try {
      await login(username, password);
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <View style={styles.ScreenContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.SectionContainer}>
            <View
              style={{flex: 1, flexDirection: 'column', paddingVertical: 20}}>
              <Image source={require('../../assets/logo.png')} />
              <Text style={styles.WelcomeText}>Xin chào!</Text>
              <Text style={styles.WelcomeSubText}>
                Hãy đăng nhập để xem QT có gì nhé!!!
              </Text>
            </View>
            <View style={{flex: 1, paddingTop: 20}}>
              {/* INPUT */}
              <View>
                <FormInput
                  value={username}
                  onChangeText={changeUsernameHandle}
                  icon={faPhone}
                  placeholder="Số điện thoại"
                  errorText="Số điện thoại không hợp lệ"
                  isInvalid={isInvalidPhone}
                />
                {!isOTP && (
                  <>
                    <View style={{paddingTop: 20}}>
                      <FormInput
                        icon={faLock}
                        value={password}
                        onChangeText={changePasswordHandle}
                        placeholder="Mật khẩu"
                        isPassword
                      />
                    </View>
                    <View>
                      <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
                    </View>
                  </>
                )}
              </View>
              {/* BUTTON */}
              <View style={{flex: 1, alignItems: 'center', paddingTop: 50}}>
                <View style={{width: 300}}>
                  <CustomButton
                    title={isOTP ? 'Gửi OTP' : 'Đăng nhập'}
                    onPress={loginHandle}
                    isLoading={loading}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* Custom Switch */}
                <View style={styles.switchContainer}>
                  <View style={styles.buttonSwitch}>
                    <TouchableOpacity
                      style={[styles.buttonSwitchIcon]}
                      onPress={(event: GestureResponderEvent) =>
                        changeIsOTPHandle(false)
                      }>
                      <FontAwesomeIcon
                        icon={faKeyboard}
                        style={[styles.buttonSwitchIcon]}
                        size={50}
                        color={!isOTP ? COLORS.backgroundBtn : '#183153'}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.buttonSwitch}>
                    <TouchableOpacity
                      style={[styles.buttonSwitchIcon]}
                      onPress={(event: GestureResponderEvent) =>
                        changeIsOTPHandle(true)
                      }>
                      <Text
                        style={[
                          {
                            fontSize: FONT_SIZE.extraLarge,
                            color: isOTP ? COLORS.backgroundBtn : '#183153',
                          },
                        ]}>
                        OTP
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.registerQ}>
                Bạn chưa có tài khoản?{' '}
                <Text
                  style={styles.registerL}
                  onPress={() => navigation.navigate('Register')}>
                  Đăng kí
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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

export default LoginScreen;
