import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil'

import { queryKey } from '../../../../utils/config';
import { thisApi } from '../context/atom';
import { dto } from '../dto';

interface IUserFetch {
  isUserLoading: boolean;
  isUserFetching: boolean;
  userDatas?: dto.IUser[];
  userLength: number;
}

export const useUserFetch = (): IUserFetch => {
  const api = useRecoilValue(thisApi);
  const { isLoading, isFetching, data } = useQuery(queryKey.user.all, () => api.selectDatas(), {
    staleTime: 1000 * 60 * 20, // 20분
    cacheTime: Infinity,
    retry: false,
    refetchOnWindowFocus: true,
    onError: (err: any) => {
      console.log(`${err.message}`);
    },
  });

  const thisLength: number = data?.length ? data.length : 0;

  return {
    isUserLoading: isLoading,
    isUserFetching: isFetching,
    userDatas: data,
    userLength: thisLength,
  }
}
