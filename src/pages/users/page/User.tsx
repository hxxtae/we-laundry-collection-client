import { useQueriesMutating } from '../../../hooks/querys';
import { Containers, Loadings } from '../../../components';
import { queryKey } from '../../../utils';
import { UserBody } from './UserBody';

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


