import Https from '../../../../service/https';
import { dto } from '../dto';

interface IUser {
  selectDatas: () => Promise<dto.IUser[]>;
  deleteData: (username: string) => Promise<boolean>;
}

class User implements IUser {
  private https: Https;

  constructor(https: Https) {
    this.https = https;
  }

  async selectDatas(): Promise<dto.IUser[]> {
    const data = await this.https.fetch('/users', {
      method: 'GET',
    });
    return data;
  }

  async deleteData(username: string): Promise<boolean> {
    const data = await this.https.fetch(`/users/${username}`, {
      method: 'DELETE',
    });
    return data;
  };
}

export default User;
