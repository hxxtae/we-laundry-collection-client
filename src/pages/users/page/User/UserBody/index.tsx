import * as S from './style';

import { useUserDel, useUserFetch } from '../../../../../hooks/querys/users';
import UserList from './UserList';
import UserControl from './UserControl';

function UserBody() {
  const { isUserLoading, isUserFetching, userDatas, userLength } = useUserFetch();
  const { isMutating, mutate } = useUserDel();
  const isLoading = isUserLoading || isUserFetching;

  const onDelete = (username: string) => {
    const check = window.confirm(`Delete the [ ${username} ] customer account?`);
    if (!check) return;
    
    isMutating || mutate(username, {
      onSuccess: () => {
        console.log('client: success!!!!');
      },
    });
  }

  return (
    <S.Section>
      <UserControl total={userLength} />
      <UserList isLoading={isLoading} users={userDatas} onDelete={onDelete} />
    </S.Section>
  )
}

export default UserBody;
