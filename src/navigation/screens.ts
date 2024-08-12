// src/navigation/screens.ts
import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import SplashScreen from '../screens/splash/SplashScreen';
import {AppStackParamList, AuthStackParamList} from './types';

interface IAuthScreen {
  name: keyof AuthStackParamList;
  component: React.ComponentType<any>;
}

interface IAppScreen {
  name: keyof AppStackParamList;
  component: React.ComponentType<any>;
}

const authScreens: IAuthScreen[] = [
  {
    name: 'Splash',
    component: SplashScreen,
  },
  {
    name: 'Login',
    component: LoginScreen,
  },
  {
    name: 'Register',
    component: RegisterScreen,
  },
];

const appScreens: IAppScreen[] = [
  {
    name: 'Splash',
    component: SplashScreen,
  },
  {
    name: 'Home',
    component: HomeScreen,
  },
];

export {authScreens, appScreens};
