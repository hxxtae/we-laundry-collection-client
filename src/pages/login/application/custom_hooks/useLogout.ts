import { AxiosResponse } from 'axios';
import { UseMutateFunction, useMutation } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { removeStorageToken, toastStyle, mutateKey } from '../../../../utils';
import { managerAuth, thisApi } from '../context/login';

interface ILogoutHook {
  isLoading: boolean;
  logout: UseMutateFunction<AxiosResponse<any, any>, unknown, void, unknown>;
}

export const useLogout = (): ILogoutHook => {
  const api = useRecoilValue(thisApi);
  const setManager = useSetRecoilState(managerAuth);
  const { isLoading, mutate } = useMutation(() => api.logout(), {
    mutationKey: mutateKey.logout,
    onSuccess: () => {
      toastStyle.info('The Manager has logged out');
      removeStorageToken();
      setManager(undefined);
    },
    onError: () => {
      toastStyle.error('logout error');
    },
  });

  return { isLoading, logout: mutate };
}
