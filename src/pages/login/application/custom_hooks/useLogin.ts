import { AxiosResponse } from 'axios';
import { UseMutateFunction, useMutation } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { queryKey } from '../../../../utils';
import { setStorageToken } from '../../../../utils/storage';
import { toastStyle } from '../../../../utils/toastConfig';
import { managerAuth, thisApi } from '../context/login';
import { ILogin, ILoginForm } from '../dto/dto';

interface ILoginHook {
  isMutating: boolean;
  login: UseMutateFunction<AxiosResponse<any, any>, any, ILoginForm, unknown>;
}

export const useLogin = (): ILoginHook => {
  const setManager = useSetRecoilState(managerAuth);
  const api = useRecoilValue(thisApi);
  const { isLoading, mutate } = useMutation(({ admin_id, admin_pw }: ILoginForm) => api.login({ admin_id, admin_pw }), {
    mutationKey: queryKey.login.all,
    onSuccess: (data) => {
      const managerData: ILogin = data?.data;
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
