import { UseMutateFunction, useMutation, useQueryClient } from 'react-query'
import { AxiosResponse } from 'axios';
import { useRecoilValue } from 'recoil';

import { mutateKey, queryKey, toastStyle } from '../../../../utils';
import { thisApi } from '../context/atom';

interface IUserDel {
  isMutating: boolean;
  mutate: UseMutateFunction<AxiosResponse<any, any>, unknown, string, unknown>;
}

export const useUserDel = (): IUserDel => {
  const query = useQueryClient();
  const api = useRecoilValue(thisApi);
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
