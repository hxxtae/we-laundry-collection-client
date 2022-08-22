import { useMutation } from 'react-query'
import { useRecoilValue } from 'recoil'
import { toastStyle } from '../../../utils/toastConfig';

import { thisApi } from '../context/login';
import { ILoginForm } from '../dto/dto'

export const useLogin = () => {
  const api = useRecoilValue(thisApi);
  const { isLoading, mutate } = useMutation(({ admin_id, admin_pw }: ILoginForm) => api.login({ admin_id, admin_pw }), {
    onSuccess: (data) => {
      toastStyle.success(`Welcome Back ${data?.data.admin_id} !!`);
    },
    onError: (err: any) => {
      toastStyle.error(`${err.message}`);
    }
  });

  return { isLoading, mutate };
}
