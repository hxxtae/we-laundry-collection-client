import { UseMutateFunction, useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { removeStorageToken, toastStyle } from '../../../utils';
import { mutateKey } from '../../../constants';
import { managerAuth } from '../../../contexts/login';
import { logout } from '../../../service/loginAPI';
import * as dto from '../../../types/login';

interface ILogoutHook {
  isLoading: boolean;
  logout: UseMutateFunction<dto.ILogout, unknown, void, unknown>;
}

export const useLogout = (): ILogoutHook => {
  const setManager = useSetRecoilState(managerAuth);
  const { isLoading, mutate } = useMutation(logout, {
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