import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface Options {
  method: string;
  headers?: {};
  body?: string;
}

export interface IHttps {
  fetch: (url: string, options: Options) => Promise<AxiosResponse>;
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

  async fetch(url: string, options: Options): Promise<AxiosResponse> {
    const { method, headers, body } = options;
    const req = {
      url,
      method,
      headers: {
        ...headers,
      },
      data: body,
    };

    try {
      const res = await this.client(req);
      return res;
    } catch (err: any) {
      if (err.response) {
        const data = err.response.data;
        const message = data && data.message ? data.message : 'Server went wrong';
        console.log(`https message: ${message}`);
        throw new Error(message);
      }
      throw new Error('connection error');
    }
  }
}

export default Https;
