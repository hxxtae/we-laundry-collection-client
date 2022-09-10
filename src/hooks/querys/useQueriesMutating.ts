import { useIsMutating, useQueryClient } from 'react-query';

interface IUserQueriesMutating {
  isLoading: boolean;
}

export const useQueriesMutating = (): IUserQueriesMutating => {
  const isMutating = useIsMutating();
  const isLoading = isMutating > 0 ? true : false;

  return { isLoading };
}

// NOTE: useIsFetching & useIsMutating 내부
// ->
// useIsFetching과 useIsMutating 내부에는 useEffect와 useState가 선언되어져 있다.
// 만약 부모 컴포넌트에서 해당 훅을 사용한다면 fetching과 mutate가 발생시
// 부모 컴포넌트가 리렌더링 되므로 사용시 주의해야 한다.
// ref : https://tech.kakao.com/2022/06/13/react-query/
