import { UseMutateFunction, useMutation, useQueryClient } from 'react-query'

import { mutateKey, queryKey, toastStyle } from '../../../../utils';
import User from '../domain/user';

interface IUserDel {
  isMutating: boolean;
  mutate: UseMutateFunction<boolean, unknown, string, unknown>;
}

export const useUserDel = (): IUserDel => {
  const query = useQueryClient();
  const api = new User();
  const { isLoading, mutate } = useMutation((username: string) => api.deleteData(username), {
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
