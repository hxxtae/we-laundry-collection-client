import { AxiosResponse } from 'axios';
import Https from '../../../service/https';

interface ICollectionApi {
  selectDatas: () => Promise<AxiosResponse>
  deleteData: (name: string) => Promise<AxiosResponse>
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
    const data = await this.https.fetch('/collections', {
      method: 'DELETE',
      body: JSON.stringify({ name }),
    });
    return data;
  }
}

export default CollectionApi;
