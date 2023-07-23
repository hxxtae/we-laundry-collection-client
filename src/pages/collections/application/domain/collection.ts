import Https from '../../../../service/https';
import { dto } from '../dto';

interface ICollectionApi {
  selectDatas: () => Promise<dto.CollectionDTO[]>;
  deleteData: (name: string) => Promise<any>;
  deleteDatas: (names: string[]) => Promise<any>;
}

class CollectionApi implements ICollectionApi {
  private https: Https;

  constructor(https: Https) {
    this.https = https;
  }

  async selectDatas(): Promise<dto.CollectionDTO[]> {
    const data = await this.https.fetch('/collections', {
      method: 'GET',
    });
    return data;
  };

  async deleteData(name: string): Promise<any> {
    const data = await this.https.fetch(`/collections/${name}`, {
      method: 'DELETE',
    });
    return data;
  }

  async deleteDatas(names: string[]): Promise<any> {
    const data = await this.https.fetch('/collections', {
      method: 'DELETE',
      body: JSON.stringify({
        names,
      }),
    });
    return data;
  }
}

export default CollectionApi;
