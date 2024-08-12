export interface IAuth {
  phone: string;
  password: string;
}
export interface IRegister {
  phone: string;
  password: string;
  name: string;
}

export type IRefreshToken = {
  accessToken: string;
  refreshToken: string;
}