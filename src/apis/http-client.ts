import axios, {AxiosInstance, AxiosResponse, ResponseType} from 'axios';
import {navigate} from '../services/navigate';
import {LOCAL_STORAGE_KEYS} from '../constants/app.constants';
import {SCREENS} from '../constants/screen.constants';
import {LocalUtils} from '../utils/local';
import toast from '../utils/toast';
import {API_URL} from '@env';
const toggleLoading = (value: boolean) => {};

const axiosInstance = (
  contentType: string = 'application/json',
  responseType: ResponseType = 'json',
  isShowLoading: boolean = true,
  isShowErrorMessage = true,
  allowAnonymous = false,
): AxiosInstance => {
  const baseURL = `${API_URL}`;

  if (isShowLoading) toggleLoading(true);

  const instance = axios.create({
    responseType,
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LocalUtils.get(
        LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
      )}`,
    },
  });

  instance.interceptors.response.use(
    response => {
      if (isShowLoading) toggleLoading(false);

      return response;
    },
    error => {
      if (isShowLoading) toggleLoading(false);
      if (error.response.status === 401) {
        handleUnAuthorize();
      } else {
        const data = error.response.data;
        if (isShowErrorMessage) {
          let message =
            'An error has occurred please contact the system administrator';

          if (data && data.message) {
            message = data.message;
          } else if (data && data.Message) {
            message = data.Message;
          } else if (typeof data === 'string' && data !== '') {
            message = data;
          }
          //   SnakeBar.error(message);
          toast.error({message});
          console.log("🚀 ~ message:", message)
        }
      }
      if (error.response.status === 403) {
        // Navigate to permission denied screen
        navigate(SCREENS.auth.permissionDenied);
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export const getAsync = (
  url: string,
  params?: {[key: string]: any},
  isShowLoading: boolean = true,
  isShowErrorMessage = true,
  allowAnonymous = false,
): Promise<AxiosResponse> => {
  return axiosInstance(
    'application/json',
    'json',
    isShowLoading,
    isShowErrorMessage,
    allowAnonymous,
  ).get(url, {
    params,
  });
};

export const postAsync = (
  url: string,
  json?: object,
  params?: {[key: string]: any},
  isShowLoading = true,
  isShowErrorMessage = true,
  allowAnonymous = false,
): Promise<AxiosResponse> => {
  return axiosInstance(
    'application/json',
    'json',
    isShowLoading,
    isShowErrorMessage,
    allowAnonymous,
  ).post(url, json, {
    params,
  });
};

export const putAsync = (
  url: string,
  json?: object,
  isShowLoading: boolean = true,
  isShowErrorMessage = true,
  allowAnonymous = false,
): Promise<AxiosResponse> => {
  return axiosInstance(
    'application/json',
    'json',
    isShowLoading,
    isShowErrorMessage,
    allowAnonymous,
  ).put(url, json);
};

export const deleteAsync = (
  url: string,
  json?: object,
  isShowLoading: boolean = true,
  isShowErrorMessage = true,
  allowAnonymous = false,
): Promise<AxiosResponse> => {
  return axiosInstance(
    'application/json',
    'json',
    isShowLoading,
    isShowErrorMessage,
    allowAnonymous,
  ).delete(url, {data: json});
};

function handleUnAuthorize() {
  LocalUtils.clear();
  // navigate(SCREENS.auth.login);
}
