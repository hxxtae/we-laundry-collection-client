import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';

import { toastStyle, queryKey, mutateKey } from '../../../../utils';
import CollectionApi from '../domain/collection';

interface ICollectionsDel {
  delsMutating: boolean;
  delDatas: UseMutateFunction<any, unknown, string[], unknown>;
}

export const useCollectionsDel = (): ICollectionsDel => {
  const api = new CollectionApi();
  const client = useQueryClient();

  const { isLoading, mutate } = useMutation((names: string[]) => api.deleteDatas(names), {
    mutationKey: mutateKey.collect.all,
    onSuccess: () => {
      client.invalidateQueries(queryKey.collect.all);
      toastStyle.success('Collections Delete Success!');
    },
    onError: (err: any) => {
      console.log(`Client Delete Error : ${err.message}`);
      toastStyle.error(err.message);
    }
  });

  return { delsMutating: isLoading, delDatas: mutate };

}
