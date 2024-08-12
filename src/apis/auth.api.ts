import {IAuth, IRefreshToken, IRegister} from '../@type/auth';
import {deleteAsync, getAsync, postAsync} from './http-client';

const url = '/auth';
const AuthApi = {
  login: async (data: IAuth) => {
    return postAsync(`${url}/login-with-password`, data);
  },
  register: (data: IRegister) => {
    return postAsync(`${url}/register`, data);
  },
  refreshToken: (data: IRefreshToken) => {
    return postAsync(`${url}/refresh-token`, data);
  },
};

export default AuthApi;
