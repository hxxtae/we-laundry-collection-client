import { useQuery } from 'react-query';

import { thisIdExcept, toastStyle } from '../../../utils';
import { queryKey } from '../../../constants';
import { selectDatas } from '../../../service/collectionsAPI';
import * as dto from '../../../types/collections';

interface ICollectionFetch {
  isCollectLoading: boolean;
  isCollectFetching: boolean;
  collectData?: dto.CollectionDTO[];
  collectLength: number;
}

export const useCollectionFetch = (): ICollectionFetch => {
  const { isLoading, isFetching, data } = useQuery(queryKey.collect.all, () => selectDatas(), {
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
