import { useQueryClient } from 'react-query';
import { useState, useEffect } from 'react';

export const useQueriesFetching = () => {
  const client = useQueryClient();
  const queries = client.getQueryCache().findAll();
  
  const [queryChangedCount, setQueryChangedCount] = useState(0);
  
  useEffect(() => {
    if (queries) {
      setQueryChangedCount(queries.length);
      console.log(queries);
    }
    console.log('A');
  }, []);

  useEffect(() => {
    if (queries.every(({ state }) => state.status !== 'loading') && queryChangedCount >= 0) {
      setQueryChangedCount((prevCount) => prevCount - 1);
    }
    console.log('B');
  });

  if (queryChangedCount < 0) {
    return false;
  }

  return true;
}
