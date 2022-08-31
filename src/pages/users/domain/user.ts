import { AxiosResponse } from 'axios';

import Https from '../../../service/https';

interface IUser {
  selectDatas: () => Promise<AxiosResponse>;
}

class User implements IUser {
  private https: Https;

  constructor(https: Https) {
    this.https = https;
  }

  async selectDatas(): Promise<AxiosResponse> {
    const data = await this.https.fetch('/users', {
      method: 'GET',
    });
    return data;
  }
}

export default User;
