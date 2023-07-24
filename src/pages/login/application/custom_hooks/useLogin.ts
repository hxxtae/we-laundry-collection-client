import { UseMutateFunction, useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { toastStyle, setStorageToken, mutateKey } from '../../../../utils';
import { managerAuth } from '../context/login';
import { dto } from '../dto';
import LoginApi from '../domain/login';

interface ILoginHook {
  isMutating: boolean;
  login: UseMutateFunction<dto.ILogin, any, dto.ILoginForm, unknown>;
}

export const useLogin = (): ILoginHook => {
  const setManager = useSetRecoilState(managerAuth);
  const api = new LoginApi();
  const { isLoading, mutate } = useMutation(({ admin_id, admin_pw }: dto.ILoginForm) => api.login({ admin_id, admin_pw }), {
    mutationKey: mutateKey.login,
    onSuccess: (data: dto.ILogin) => {
      if (!data) {
        toastStyle.error('Invalid id and paaword.');
        return;
      }
      toastStyle.success(`Welcome Back ${data?.admin_id} Manager !!`);
      setStorageToken(data.token);
      setManager(data.token);
    },
    onError: (err: any) => {
      
    }
  });

  return { isMutating: isLoading, login: mutate };
}
