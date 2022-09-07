import { useIsMutating } from 'react-query';

interface IUserQueriesMutating {
  isLoading: boolean;
}

export const useQueriesMutating = (): IUserQueriesMutating => {
  const isMutating = useIsMutating();
  const isLoading = isMutating > 0 ? true : false;

  return { isLoading };
}
