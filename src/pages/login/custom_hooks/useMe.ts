import { useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { queryKey } from '../../../utils/config';
import { toastStyle } from '../../../utils/toastConfig';
import { managerAuth, thisApi } from '../context/login'
import { IMe } from '../dto/dto';

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
    onSuccess: (data) => {
      const managerData: IMe = data?.data;
      setManager(managerData.token);
    },
    onError: (err: any) => {
      toastStyle.info('Please Login');
    }
  });

  return { isLoading };
}
