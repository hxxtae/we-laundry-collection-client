import { useQuery } from 'react-query';

import { queryKey } from '../../../constants';
import { dto } from '../../../pages/users/application/dto';
import { selectDatas } from '../../../pages/users/application/domain/user';

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
