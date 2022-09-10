import styled from 'styled-components';

import { colors, media, scroll } from '../../../../../utils';
import { dto } from '../../../application/dto';
import UserItem from './UserItem';

interface IUserList {
  isLoading: boolean;
  users: dto.IUser[] | [] | undefined;
  onDelete: (username: string) => void;
}

function UserList({ isLoading, users, onDelete }: IUserList) {
  
  return (
    <Contain>
      {
        isLoading ?
          <Loading>Loading...</Loading> :
          users?.map((user) => <UserItem key={user.id} user={user} onDelete={onDelete} />)
      }
    </Contain>
  )
}

export default UserList;

const Contain = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${colors.boxColor};
  border-radius: 7px;
  padding: 30px 15px;
  margin-bottom: 20px;
  max-height: 80vh;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  ${scroll.bar(10)}
  ${scroll.track()}
  ${scroll.thumb(colors.secondary)}

  @media ${media.tablet_s} {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 20px;
  color: ${colors.light};
  padding: 50px;
`;
