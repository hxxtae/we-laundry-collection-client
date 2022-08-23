import { AxiosResponse } from 'axios';
import { UseMutateFunction, useMutation } from 'react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { toastStyle } from '../../../utils/toastConfig';

import { managerAuth, thisApi } from '../context/login';
import { ILoginForm } from '../dto/dto'

interface ILogin {
  isLoading: boolean;
  login: UseMutateFunction<AxiosResponse<any, any>, any, ILoginForm, unknown>;
}

export const useLogin = () => {
  const setManager = useSetRecoilState(managerAuth);
  const api = useRecoilValue(thisApi);
  const { isLoading, mutate } = useMutation(({ admin_id, admin_pw }: ILoginForm) => api.login({ admin_id, admin_pw }), {
    onSuccess: (data) => {
      toastStyle.success(`Welcome Back ${data?.data.admin_id} Manager !!`);
      setManager(data?.data.token);
    },
    onError: (err: any) => {
      toastStyle.error(`${err.message}`);
    }
  });

  return { isLoading, login: mutate };
}
