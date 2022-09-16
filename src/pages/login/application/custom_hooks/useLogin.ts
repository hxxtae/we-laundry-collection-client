import { AxiosResponse } from 'axios';
import { UseMutateFunction, useMutation } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { toastStyle, setStorageToken, mutateKey } from '../../../../utils';
import { managerAuth, thisApi } from '../context/login';
import { dto } from '../dto';

interface ILoginHook {
  isMutating: boolean;
  login: UseMutateFunction<AxiosResponse<any, any>, any, dto.ILoginForm, unknown>;
}

export const useLogin = (): ILoginHook => {
  const setManager = useSetRecoilState(managerAuth);
  const api = useRecoilValue(thisApi);
  const { isLoading, mutate } = useMutation(({ admin_id, admin_pw }: dto.ILoginForm) => api.login({ admin_id, admin_pw }), {
    mutationKey: mutateKey.login,
    onSuccess: (data) => {
      const managerData: dto.ILogin = data?.data;
      toastStyle.success(`Welcome Back ${data?.data.admin_id} Manager !!`);
      setStorageToken(managerData.token);
      setManager(managerData.token);
    },
    onError: (err: any) => {
      toastStyle.error(`${err.message}`);
    }
  });

  return { isMutating: isLoading, login: mutate };
}
