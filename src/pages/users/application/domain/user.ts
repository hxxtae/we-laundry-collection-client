import { api } from '../../../../service/api';
import { dto } from '../dto';

/**
 * 📗 API Function : User 목록 조회
 * @returns {Promise<dto.IUser[]>}
 */
export const selectDatas = async (): Promise<dto.IUser[]> => {
  const data = await api('/users', {
    method: 'GET',
  });
  return data;
}

/**
 * 📗 API Function : User 목록 삭제(단건)
 * @param {string} username - User 이름
 * @returns {Promise<boolean>}
 */
export const deleteData = async (username: string): Promise<boolean> => {
  const data = await api(`/users/${username}`, {
    method: 'DELETE',
  });
  return data;
};
  