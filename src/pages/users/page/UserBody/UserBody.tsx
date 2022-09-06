import styled from 'styled-components';

import { Loadings } from '../../../../components';
import { useUserFetch } from '../../application/custom_hooks';
import UserControl from './UserControl';
import UserList from './UserList';

function UserBody() {
  const { isUserLoading, isUserFetching, userDatas, userLength } = useUserFetch();

  return (
    <Section>
      <UserControl />
      <UserList isLoading={isUserLoading} users={userDatas} />
    </Section>
  )
}

export default UserBody;

const Section = styled.section`
  padding: 20px 0;
`;

