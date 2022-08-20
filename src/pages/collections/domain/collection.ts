import { AxiosResponse } from 'axios';
import Https from '../../../service/https';

interface ICollectionApi {
  selectDatas: () => Promise<AxiosResponse>;
  deleteData: (name: string) => Promise<AxiosResponse>;
  deleteDatas: (names: string[]) => Promise<AxiosResponse>;
}

class CollectionApi implements ICollectionApi {
  private https: Https;

  constructor(https: Https) {
    this.https = https;
  }

  async selectDatas(): Promise<AxiosResponse> {
    const data = await this.https.fetch('/collections', {
      method: 'GET',
    });
    return data;
  };

  async deleteData(name: string): Promise<AxiosResponse> {
    const data = await this.https.fetch(`/collections/${name}`, {
      method: 'DELETE',
    });
    return data;
  }

  async deleteDatas(names: string[]): Promise<AxiosResponse> {
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
