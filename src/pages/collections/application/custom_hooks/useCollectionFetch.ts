import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil'

import { queryKey, thisIdExcept, toastStyle } from '../../../../utils';
import { thisApi } from '../context/atom'
import { dto } from '../../application/dto';

interface ICollectionFetch {
  isCollectLoading: boolean;
  isCollectFetching: boolean;
  collectData?: dto.CollectionDTO[];
  collectLength: number;
}

export const useCollectionFetch = (): ICollectionFetch => {
  const api = useRecoilValue(thisApi);
  
  const { isLoading, isFetching, data } = useQuery(queryKey.collect.all, () => api.selectDatas(), {
    staleTime: 1000 * 60 * 20, // 20분
    cacheTime: Infinity,
    retry: false,
    refetchOnWindowFocus: true,
    select: (data: dto.CollectionDTO[]) => {
      return data.filter((obj) => !thisIdExcept(obj.name));
    },
    onError: (err: any) => {
      toastStyle.error(err.message);
    },
  });
  
  const thisLength: number = data ? data.length : 0;

  return {
    isCollectLoading: isLoading,
    isCollectFetching: isFetching,
    collectData: data,
    collectLength: thisLength,
  }
}
