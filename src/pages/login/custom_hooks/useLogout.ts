import { AxiosResponse } from 'axios';
import { UseMutateFunction, useMutation } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { toastStyle } from '../../../utils/toastConfig';
import { managerAuth, thisApi } from '../context/login';

interface ILogout {
  isLoading: boolean;
  logout: UseMutateFunction<AxiosResponse<any, any>, unknown, void, unknown>;
}

export const useLogout = (): ILogout => {
  const api = useRecoilValue(thisApi);
  const setManager = useSetRecoilState(managerAuth);
  const { isLoading, mutate } = useMutation(() => api.logout(), {
    onSuccess: () => {
      toastStyle.info('The Manager has logged out');
      setManager(undefined);
    },
    onError: () => {
      toastStyle.error('logout error');
    },
  });

  return { isLoading, logout: mutate };
}
