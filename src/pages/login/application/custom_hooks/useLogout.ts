import { UseMutateFunction, useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { removeStorageToken, toastStyle, mutateKey } from '../../../../utils';
import { managerAuth } from '../context/login';
import { dto } from '../dto';
import LoginApi from '../domain/login';

interface ILogoutHook {
  isLoading: boolean;
  logout: UseMutateFunction<dto.ILogout, unknown, void, unknown>;
}

export const useLogout = (): ILogoutHook => {
  const api = new LoginApi();
  const setManager = useSetRecoilState(managerAuth);
  const { isLoading, mutate } = useMutation(() => api.logout(), {
    mutationKey: mutateKey.logout,
    onSuccess: (data: dto.ILogout) => {
      toastStyle.info(data?.message);
      removeStorageToken();
      setManager(undefined);
    },
    onError: () => {
      toastStyle.error('Logout Error');
    },
  });

  return { isLoading, logout: mutate };
}
