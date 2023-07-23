import { useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { queryKey } from '../../../../utils/config';
import { toastStyle } from '../../../../utils/toastConfig';
import { managerAuth, thisApi } from '../context/login'
import { dto } from '../dto';

interface IMeHook {
  isLoading: boolean;
}

export const useMe = (): IMeHook => {
  const setManager = useSetRecoilState(managerAuth);
  const api = useRecoilValue(thisApi);
  const { isLoading } = useQuery(queryKey.auth.me, () => api.me(), {
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
