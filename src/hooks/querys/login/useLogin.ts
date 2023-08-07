import { UseMutateFunction, useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { toastStyle, setStorageToken } from '../../../utils';
import { mutateKey } from '../../../constants';
import { managerAuth } from '../../../pages/login/application/context/login';
import { login } from '../../../pages/login/application/domain/login';
import { dto } from '../../../pages/login/application/dto';

interface ILoginHook {
  isMutating: boolean;
  login: UseMutateFunction<dto.ILogin, any, dto.ILoginForm, unknown>;
}

export const useLogin = (): ILoginHook => {
  const setManager = useSetRecoilState(managerAuth);
  const queryFn = ({ admin_id, admin_pw }: dto.ILoginForm) => login({ admin_id, admin_pw });
  const { isLoading, mutate } = useMutation(queryFn, {
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
