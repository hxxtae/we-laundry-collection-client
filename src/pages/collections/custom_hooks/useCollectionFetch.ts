import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil'
import { queryKey } from '../../../utils/config';

import { thisApi } from '../atom/atom'
import { CollectionDTO } from '../dto/dto';

interface ICollectionFetch {
  isLoading: boolean;
  fetchData: CollectionDTO[];
}

export const useCollectionFetch = (): ICollectionFetch => {
  const api = useRecoilValue(thisApi);
  
  const { isLoading, data } = useQuery(queryKey.collect.all, () => api.selectDatas(), {
    staleTime: 1200000, // 20분
    cacheTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: 'always',
    onError: (error: any) => {
      console.log('useQuery - Collection Fetch Error');
    }
  });
  return { isLoading, fetchData: data?.data }
}
