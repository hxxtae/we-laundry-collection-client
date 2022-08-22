import { AxiosResponse } from 'axios';

import Https from '../../../service/https';
import { ILoginForm } from '../dto/dto';

interface ILoginApi {
  login: ({ admin_id, admin_pw }: ILoginForm) => Promise<AxiosResponse>;
}

class LoginApi implements ILoginApi {
  private https: Https;

  constructor(https: Https) {
    this.https = https;
  };

  async login({admin_id, admin_pw}: ILoginForm) {
    const data = await this.https.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        admin_id,
        admin_pw,
      }),
    });
    return data;
  };

  async logout() {
    const data = await this.https.fetch('/auth/logout', {
      method: 'POST',
    });
    return data;
  };
}

export default LoginApi;
