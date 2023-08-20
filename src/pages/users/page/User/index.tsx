import { useQueriesMutating } from '../../../../hooks/querys/common';
import { Containers, Loadings } from '../../../../components';
import { queryKey } from '../../../../constants';
import UserBody from './UserBody';

function User() {
  const { isLoading: isMutating } = useQueriesMutating(queryKey.user.all);

  return (
    <>
      <Containers>
        <UserBody />
      </Containers>
      
      {isMutating && <Loadings />}
    </>
  )
}

export default User;


