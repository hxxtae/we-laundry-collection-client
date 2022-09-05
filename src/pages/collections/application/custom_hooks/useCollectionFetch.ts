import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil'

import { queryKey, toastStyle } from '../../../../utils';
import { thisApi } from '../context/atom'
import { dto } from '../../application/dto';

interface ICollectionFetch {
  isCollectLoading: boolean;
  isCollectFetching: boolean;
  collectData?: dto.CollectionDTO[] | [];
  collectLength: number;
}

export const useCollectionFetch = (): ICollectionFetch => {
  const api = useRecoilValue(thisApi);
  
  const { isLoading, isFetching, data } = useQuery(queryKey.collect.all, () => api.selectDatas(), {
    staleTime: 1200000, // 20분
    cacheTime: Infinity,
    retry: false,
    refetchOnWindowFocus: true,
    onError: (err: any) => {
      toastStyle.error(err.message);
    }
  });
  
  const thisLength: number = data?.data ? data.data.length : 0;

  return {
    isCollectLoading: isLoading,
    isCollectFetching: isFetching,
    collectData: data?.data,
    collectLength: thisLength,
  }
}
