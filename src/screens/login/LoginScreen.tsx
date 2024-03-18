import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS, FONT_SIZE} from '../../theme/theme';
import FormInput from '../../components/input/FormInput';
import {faUser, width} from '@fortawesome/free-solid-svg-icons/faUser';
import {useState} from 'react';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../components/button/CustomButton';

const LoginScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const changeUsernameHandle = (text: string) => {
    setUsername(text);
  };
  const changePasswordHandle = (text: string) => {
    setPassword(text);
  };
  return (
    <View style={styles.ScreenContainer}>
      <View style={styles.SectionContainer}>
        <View style={{flex: 3, flexDirection: 'column', paddingVertical: 20}}>
          <Image source={require('../../assets/logo.png')} />
          <Text style={styles.WelcomeText}>Xin chào!</Text>
          <Text style={styles.WelcomeSubText}>
            Hãy đăng nhập để xem chúng tôi có gì nhé!!!
          </Text>
        </View>
        <View style={{flex: 8, marginTop: 20}}>
          {/* INPUT */}
          <View >
            <View>
              <FormInput
                icon={faUser}
                value={username}
                onChangeText={changeUsernameHandle}
                placeholder="Tên đăng nhập"
              />
            </View>
            <View style={{marginTop: 10}}>
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
          </View>
          {/* BUTTON */}
          <View style={{flex: 1, alignItems: 'center', marginTop:50}}>
            <View style={{width: 300}}>
              <CustomButton title="Đăng nhập" onPress={() => {}} />
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.registerQ}>
            Bạn chưa có tài khoản?
            <Text style={styles.registerL}> Đăng kí</Text>
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
