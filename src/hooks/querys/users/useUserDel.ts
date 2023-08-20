import { UseMutateFunction, useMutation, useQueryClient } from 'react-query'

import { toastStyle } from '../../../utils';
import { queryKey, mutateKey } from '../../../constants';
import { deleteData } from '../../../pages/users/application/domain/user';

interface IUserDel {
  isMutating: boolean;
  mutate: UseMutateFunction<boolean, unknown, string, unknown>;
}

export const useUserDel = (): IUserDel => {
  const query = useQueryClient();
  const queryFn = (username: string) => deleteData(username);
  const { isLoading, mutate } = useMutation(queryFn, {
    mutationKey: mutateKey.user.all,
    onSuccess: () => {
      query.invalidateQueries(queryKey.user.all);
      toastStyle.success('User Delete Success!');
    },
    onError: (err: any) => {
      console.log(`User Delete Error ${err.message}`);
      toastStyle.error(`${err.message}`);
    }
  });

  return { isMutating: isLoading, mutate };
}
