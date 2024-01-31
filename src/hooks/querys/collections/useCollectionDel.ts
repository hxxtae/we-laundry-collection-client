import { UseMutateFunction, useMutation, useQueryClient } from 'react-query'

import { toastStyle } from '../../../utils';
import { queryKey, mutateKey } from '../../../constants'
import { deleteData } from '../../../service/collectionsAPI';

interface ICollectionDel {
  delMutating: boolean;
  delData: UseMutateFunction<any, unknown, string, unknown>;
}

export const useCollectionDel = (): ICollectionDel => {
  const client = useQueryClient();
  const queryFn = (name: string) => deleteData(name);
  const { isLoading, mutate } = useMutation(queryFn, {
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
