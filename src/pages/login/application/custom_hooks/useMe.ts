import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil'

import { queryKey, toastStyle } from '../../../../utils';
import { managerAuth } from '../context/login'
import { me } from '../domain/login';
import { dto } from '../dto';

interface IMeHook {
  isLoading: boolean;
}

export const useMe = (): IMeHook => {
  const setManager = useSetRecoilState(managerAuth);
  const { isLoading } = useQuery(queryKey.auth.me, me, {
    staleTime: 0,
    cacheTime: 0,
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
