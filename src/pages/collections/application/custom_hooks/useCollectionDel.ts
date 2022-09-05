import { UseMutateFunction, useMutation, useQueryClient } from 'react-query'
import { useRecoilValue } from 'recoil';
import { AxiosResponse } from 'axios';

import { thisApi } from '../context/atom';
import { toastStyle, queryKey } from '../../../../utils';

interface ICollectionDel {
  delLoading: boolean;
  delData: UseMutateFunction<AxiosResponse<any, any>, unknown, string, unknown>;
}

export const useCollectionDel = (): ICollectionDel => {
  const api = useRecoilValue(thisApi);
  const client = useQueryClient();

  const { isLoading, mutate } = useMutation((name: string) => api.deleteData(name), {
    onSuccess: () => {
      client.invalidateQueries(queryKey.collect.all);
      toastStyle.success('Collection Delete Success!');
    },
    onError: (err: any) => {
      console.log(`Client Delete Error : ${err.message}`);
      toastStyle.error(err.message);
    }
  });

  return { delLoading: isLoading , delData: mutate };
}
