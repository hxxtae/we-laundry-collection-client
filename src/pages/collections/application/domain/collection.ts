import { api } from '../../../../service/api';
import { dto } from '../dto';

interface ICollectionApi {
  selectDatas: () => Promise<dto.CollectionDTO[]>;
  deleteData: (name: string) => Promise<any>;
  deleteDatas: (names: string[]) => Promise<any>;
}

class CollectionApi implements ICollectionApi {
  private api;

  constructor() {
    this.api = api;
  }

  async selectDatas(): Promise<dto.CollectionDTO[]> {
    const data = await this.api('/collections', {
      method: 'GET',
    });
    return data;
  };

  async deleteData(name: string): Promise<any> {
    const data = await this.api(`/collections/${name}`, {
      method: 'DELETE',
    });
    return data;
  }

  async deleteDatas(names: string[]): Promise<any> {
    const data = await this.api('/collections', {
      method: 'DELETE',
      body: JSON.stringify({
        names,
      }),
    });
    return data;
  }
}

export default CollectionApi;
