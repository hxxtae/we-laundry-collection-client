import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';

import { toastStyle } from '../../../utils';
import { queryKey, mutateKey } from '../../../constants';
import { deleteDatas } from '../../../service/collectionsAPI';

interface ICollectionsDel {
  delsMutating: boolean;
  delDatas: UseMutateFunction<any, unknown, string[], unknown>;
}

export const useCollectionsDel = (): ICollectionsDel => {
  const client = useQueryClient();
  const queryFn = (names: string[]) => deleteDatas(names)
  const { isLoading, mutate } = useMutation(queryFn, {
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
