import { api } from '../../../../service/api';
import { dto } from '../dto';

/**
 * 📗 API Function : manager 로그인
 * @param {Object} ILoginForm - Login Form
 * @param {string} ILoginForm.admin_id - manager id
 * @param {string} ILoginForm.admin_pw - manager password
 * @returns {Promise<dto.ILogin>}
*/
export const login = async ({admin_id, admin_pw}: dto.ILoginForm): Promise<dto.ILogin> => {
  const data = await api('/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      admin_id,
      admin_pw,
    }),
  });
  return data;
};

/**
 * 📗 API Function : manager 로그아웃
 * @returns {Promise<dto.ILogout>}
 */
export const logout = async (): Promise<dto.ILogout> => {
  const data = await api('/auth/logout', {
    method: 'POST',
  });
  return data;
};

/**
 * 📗 API Function : manager 로그인 확인
 * @returns {Promise<dto.IMe>}
 */
export const me = async (): Promise<dto.IMe> => {
  const data = await api('/auth/me', {
    method: 'GET',
  });
  return data;
}
