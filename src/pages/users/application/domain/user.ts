import { api } from '../../../../service/api';
import { dto } from '../dto';

interface IUser {
  selectDatas: () => Promise<dto.IUser[]>;
  deleteData: (username: string) => Promise<boolean>;
}

class User implements IUser {
  private api;

  constructor() {
    this.api = api;
  }

  async selectDatas(): Promise<dto.IUser[]> {
    const data = await this.api('/users', {
      method: 'GET',
    });
    return data;
  }

  async deleteData(username: string): Promise<boolean> {
    const data = await this.api(`/users/${username}`, {
      method: 'DELETE',
    });
    return data;
  };
}

export default User;
