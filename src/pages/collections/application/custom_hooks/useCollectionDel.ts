import { UseMutateFunction, useMutation, useQueryClient } from 'react-query'

import { toastStyle, queryKey, mutateKey } from '../../../../utils';
import CollectionApi from '../domain/collection';

interface ICollectionDel {
  delMutating: boolean;
  delData: UseMutateFunction<any, unknown, string, unknown>;
}

export const useCollectionDel = (): ICollectionDel => {
  const client = useQueryClient();
  const api = new CollectionApi();
  const { isLoading, mutate } = useMutation((name: string) => api.deleteData(name), {
    mutationKey: mutateKey.collect.all,
    onSuccess: () => {
      client.invalidateQueries(queryKey.collect.all);
      toastStyle.success('Collection Delete Success!');
    },
    onError: (err: any) => {
      console.log(`Client Delete Error : ${err.message}`);
      toastStyle.error(err.message);
    }
  });

  return { delMutating: isLoading , delData: mutate };
}
