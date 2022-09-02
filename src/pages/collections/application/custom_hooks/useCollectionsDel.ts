import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import { AxiosResponse } from 'axios';

import { thisApi } from '../context/atom';
import { toastStyle } from '../../../../utils/toastConfig';
import { queryKey } from '../../../../utils/config';

interface ICollectionsDel {
  delsLoading: boolean;
  delDatas: UseMutateFunction<AxiosResponse<any, any>, unknown, string[], unknown>;
}

export const useCollectionsDel = (): ICollectionsDel => {
  const api = useRecoilValue(thisApi);
  const client = useQueryClient();

  const { isLoading, mutate } = useMutation((names: string[]) => api.deleteDatas(names), {
    onSuccess: () => {
      client.invalidateQueries(queryKey.collect.all);
      toastStyle.success('Collections Delete Success!');
    },
    onError: (err: any) => {
      console.log(`Client Delete Error : ${err.message}`);
      toastStyle.error(err.message);
    }
  });

  return { delsLoading: isLoading, delDatas: mutate };

}
