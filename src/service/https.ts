import axios, { AxiosInstance } from 'axios';

import { getStorageToken } from '../utils/storage';

interface Options {
  method: string;
  headers?: {};
  body?: string;
}

export interface IHttps {
  fetch: (url: string, options: Options) => Promise<any>;
}

class Https implements IHttps {
  private BASE_URL: string;
  private client: AxiosInstance;

  constructor(base_url: string) {
    this.BASE_URL = base_url;
    this.client = axios.create({
      baseURL: this.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
  }

  async fetch(url: string, options: Options): Promise<any> {
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
      const res = await this.client(req);
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
}

export default Https;
