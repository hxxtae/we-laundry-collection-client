import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil'

import { toastStyle } from '../../../utils';
import { queryKey } from '../../../constants';
import { managerAuth } from '../../../pages/login/application/context/login';
import { me } from '../../../pages/login/application/domain/login';
import { dto } from '../../../pages/login/application/dto';

interface IMeHook {
  isLoading: boolean;
}

export const useMe = (): IMeHook => {
  const setManager = useSetRecoilState(managerAuth);
  const { isLoading } = useQuery(queryKey.auth.me, me, {
    staleTime: 1000,
    cacheTime: 1000,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: 'always',
    suspense: true,
    onSuccess: (data: dto.IMe) => {
      setManager(data?.token);
    },
    onError: (err: any) => {
      toastStyle.info('Login Error');
    }
  });

  return { isLoading };
}