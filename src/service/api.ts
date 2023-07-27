import axios from 'axios';

import { getStorageToken } from '../utils/storage';
import { baseURL } from '../constants/path';

interface Options {
  method: string;
  headers?: {};
  body?: string;
}

const apiContext = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const api = async (url: string, options: Options) => {
  const { method, headers, body } = options;
  const req = {
    url,
    method,
    headers: {
      ...headers,
      'Authorization': `Bearer ${getStorageToken()}`,
    },
    data: body,
  };

  try {
    const res = await apiContext(req);
    return res.data;
  } catch (err: any) {
    if (err.response) {
      const data = err.response.data;
      const message = data?.message;
      if (message) {
        console.log(`(4xx) https message: ${message}`);
        return undefined;
      }
      throw new Error('(5xx) Server went wrong');
    }
    throw new Error('(5xx) connection error');
  }
}
