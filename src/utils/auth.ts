import axios from 'axios';
import { Buffer } from 'buffer';
import { SCREENS } from '../constants/screen.constants';
import { navigate } from '../services/navigate';
import LocalUtils from './local';

export function jwtDecodeHandle(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    Buffer.from(base64, 'base64')
      .toString('binary')
      .split('')
      .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(''),
  );

  return JSON.parse(jsonPayload);
}

export const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecodeHandle(accessToken);
  const currentTime = Date.now() / 1000;
  if (!decoded.exp) {
    return false;
  }
  return decoded.exp > currentTime;
};

// ----------------------------------------------------------------------

export const tokenExpired = (exp: number) => {
  // eslint-disable-next-line prefer-const
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  // expiredTimer = setTimeout(() => {
  //   LocalUtils.clear();

  //   navigate(SCREENS.auth.login);
  // }, timeLeft);
};

// ----------------------------------------------------------------------

export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    LocalUtils.set('accessToken', accessToken);

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    const {exp} = jwtDecodeHandle(accessToken); // ~3 days by minimals server
    if (exp) {
      tokenExpired(exp);
    }
  } else {
    LocalUtils.clear;
    delete axios.defaults.headers.common.Authorization;
  }
};
