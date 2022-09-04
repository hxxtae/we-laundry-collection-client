import { atom } from 'recoil';
import Https from '../../../service/https';
import User from '../domain/user';

const baseURL = process.env.REACT_APP_BASE_URL!;
const https = new Https(baseURL);
const userApi = new User(https);

export const thisApi = atom({
  key: 'usersApiKey',
  default: userApi,
});
