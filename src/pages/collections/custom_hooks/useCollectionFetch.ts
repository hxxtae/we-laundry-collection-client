import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil'
import { queryKey } from '../../../utils/config';

import { thisApi } from '../context/atom'
import { CollectionDTO } from '../dto/dto';

interface ICollectionFetch {
  isCollectLoading: boolean;
  isCollectFetching: boolean;
  collectData: CollectionDTO[];
  collectLength: number;
}

export const useCollectionFetch = (): ICollectionFetch => {
  const api = useRecoilValue(thisApi);
  
  const { isLoading, isFetching, data } = useQuery(queryKey.collect.all, () => api.selectDatas(), {
    staleTime: 1200000, // 20분
    cacheTime: Infinity,
    retry: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: 'always',
    onError: () => {
      console.log('useQuery - Collection Fetch Error');
    }
  });
  
  const thisLength = data?.data ? data.data.length : 0;

  return {
    isCollectLoading: isLoading,
    isCollectFetching: isFetching,
    collectData: data?.data,
    collectLength: thisLength,
  }
}
