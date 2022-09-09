import styled from 'styled-components';

import { useUserDel, useUserFetch } from '../../application/custom_hooks';
import UserControl from './UserControl';
import UserList from './UserList';

function UserBody() {
  const { isUserLoading, isUserFetching, userDatas, userLength } = useUserFetch();
  const { isMutating, mutate } = useUserDel();
  const isLoading = isUserLoading || isUserFetching;

  const onDelete = (username: string) => {
    const check = window.confirm(`Delete the [ ${username} ] collection?`);
    if (!check) return;
    
    mutate(username, {
      onSuccess: () => {
        console.log('client: success!!!!');
      }
    });
  }

  return (
    <Section>
      <UserControl />
      <UserList isLoading={isLoading} users={userDatas} onDelete={onDelete} />
    </Section>
  )
}

export default UserBody;

const Section = styled.section`
  padding: 20px 0;
`;

