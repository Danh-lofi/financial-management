import {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
} from 'react';
// utils
import AuthApi from '../apis/auth.api';
import {LocalUtils} from '../utils/local';

//
import {
  ActionMapType,
  AuthStateType,
  AuthUserType,
  JWTContextType,
} from './types';
import {LOCAL_STORAGE_KEYS} from '../constants/app.constants';
import {jwtDecode} from 'jwt-decode';
import {isValidToken, jwtDecodeHandle, setSession} from '../utils/auth';

enum Types {
  INITIAL = 'INITIAL',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
}

type Payload = {
  [Types.INITIAL]: {
    isAuthenticated: boolean;
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

export const AuthContext = createContext<JWTContextType | null>(null);

// ----------------------------------------------------------------------

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({children}: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken =
      (await LocalUtils.get(LOCAL_STORAGE_KEYS.ACCESS_TOKEN)) ?? '';
      console.log("🚀 ~ initialize ~ accessToken:", accessToken)
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);
        const decodeToken = jwtDecodeHandle(accessToken);
        const {
          name,
          phone,
          // refreshToken
        } = decodeToken;
        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: true,
            user: {
              // refreshToken,
              name,
              phone,
            },
          },
        });
      } else {
        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (phone: string, password: string) => {
    const response = await AuthApi.login({
      phone,
      password,
    });

    const {token} = response?.data?.data;
    console.log("🚀 ~ login ~ token:", token)
    LocalUtils.set(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, token);

    const decodeToken: any = jwtDecodeHandle(token);
    const {name} = decodeToken;
    if (token) {
      dispatch({
        type: Types.LOGIN,
        payload: {
          user: {
            // refreshToken,
            name,
            phone,
          },
        },
      });
    } else {
      console.log('error');
    }
  }, []);

  // REGISTER
  const register = useCallback(
    async (phone: string, password: string, name: string) => {
      const response = await AuthApi.register({
        phone,
        password,
        name,
      });
      const {accessToken, user} = response.data;

      LocalUtils.set(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);

      dispatch({
        type: Types.REGISTER,
        payload: {
          user,
        },
      });
    },
    [],
  );

  // LOGOUT
  const logout = useCallback(() => {
    LocalUtils.clear();
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      method: 'jwt',
      login,
      loginWithGoogle: () => {},
      loginWithGithub: () => {},
      loginWithTwitter: () => {},
      register,
      logout,
    }),
    [
      state.isAuthenticated,
      state.isInitialized,
      state.user,
      login,
      logout,
      register,
    ],
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
