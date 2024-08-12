import React from 'react';
import AppStack from './app/AppStack';
import AuthStack from './auth/AuthStack';
import {useAuthContext} from '../auth/useAuthContext';
import LocalUtils from '../utils/local';

const RootNavigator: React.FC = () => {
  const {isAuthenticated,isInitialized} = useAuthContext();
  return isAuthenticated ? <AppStack /> : <AuthStack />;
};

export default RootNavigator;
