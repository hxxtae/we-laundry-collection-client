import { api } from './api';
import * as dto from '../types/collections';

/**
 * 📗 API Function : Collection 목록 조회
 * @returns {Promise<dto.CollectionDTO[]>}
 */
export const selectDatas = async (): Promise<dto.CollectionDTO[]> => {
  const data = await api('/collections', {
    method: 'GET',
  });
  return data;
};

/**
 * 📗 API Function : Collection 목록 삭제(단건)
 * @param {string} name - Collection 이름
 * @returns { Promise<any> }
 */
export const deleteData = async (name: string): Promise<any> => {
  const data = await api(`/collections/${name}`, {
    method: 'DELETE',
  });
  return data;
}

/**
 * 📗 API Function : Collection 목록 삭제(다건)
 * @param {string[]} names - Collection 이름(배열)
 * @returns 
 */
export const deleteDatas = async (names: string[]): Promise<any> => {
  const data = await api('/collections', {
    method: 'DELETE',
    body: JSON.stringify({
      names,
    }),
  });
  return data;
}
