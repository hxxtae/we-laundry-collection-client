import { atom } from 'recoil';
import Https from '../../../../service/https';
import CollectionApi from '../../application/domain/collection';

const baseURL = process.env.REACT_APP_BASE_URL!;
const httpService = new Https(baseURL);
const collectionApi = new CollectionApi(httpService);

export const thisApi = atom({
  key: 'collectionApiKey',
  default: collectionApi,
});


