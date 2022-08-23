import { atom } from 'recoil';
import Https from '../../../service/https';
import LoginApi from '../domain/login';

const baseURL = process.env.REACT_APP_BASE_URL!;
const https = new Https(baseURL);
const loginApi = new LoginApi(https);

export const thisApi = atom({
  key: 'loginApiKey',
  default: loginApi,
});

export const managerAuth = atom<string | undefined>({
  key: 'managerAuthKey',
  default: undefined,
});
