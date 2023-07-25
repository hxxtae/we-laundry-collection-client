import { useQuery } from 'react-query';

import { queryKey } from '../../../../utils/config';
import { dto } from '../dto';
import { selectDatas } from '../domain/user';

interface IUserFetch {
  isUserLoading: boolean;
  isUserFetching: boolean;
  userDatas?: dto.IUser[];
  userLength: number;
}

export const useUserFetch = (): IUserFetch => {
  const { isLoading, isFetching, data } = useQuery(queryKey.user.all, () => selectDatas(), {
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
