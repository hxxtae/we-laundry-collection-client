import styled from 'styled-components';

import { useUserDel, useUserFetch } from '../../application/custom_hooks';
import { UserList } from './UserList';
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
    <Section>
      <UserControl total={userLength} />
      <UserList isLoading={isLoading} users={userDatas} onDelete={onDelete} />
    </Section>
  )
}

export default UserBody;

const Section = styled.section`
  padding: 20px 0;
`;

