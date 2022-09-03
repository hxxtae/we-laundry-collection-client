import { AxiosResponse } from 'axios';

import Https from '../../../../service/https';
import { dto } from '../dto';

interface ILoginApi {
  login: ({ admin_id, admin_pw }: dto.ILoginForm) => Promise<AxiosResponse>;
  logout: () => Promise<AxiosResponse>;
  me: () => Promise<AxiosResponse>;
}

class LoginApi implements ILoginApi {
  private https: Https;

  constructor(https: Https) {
    this.https = https;
  };

  /**
   * manager 로그인 API Function
   * @param {Object} ILoginForm - Login Form
   * @param {string} ILoginForm.admin_id - manager id
   * @param {string} ILoginForm.admin_pw - manager password
   * @returns {Promise<AxiosResponse>}
   */
  async login({admin_id, admin_pw}: dto.ILoginForm): Promise<AxiosResponse> {
    const data = await this.https.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        admin_id,
        admin_pw,
      }),
    });
    return data;
  };

  /**
   * manager 로그아웃 API Function
   * @returns {Promise<AxiosResponse>}
   */
  async logout(): Promise<AxiosResponse> {
    const data = await this.https.fetch('/auth/logout', {
      method: 'POST',
    });
    return data;
  };

  /**
   * manager 로그인 확인 API Function
   * @returns {Promise<AxiosResponse>}
   */
  async me(): Promise<AxiosResponse> {
    const data = await this.https.fetch('/auth/me', {
      method: 'GET',
    });
    return data;
  }
}

export default LoginApi;
