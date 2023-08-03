import { dto } from '../../../../application/dto';
import * as S from './style';
import UserItem from './UserItem';

interface IUserList {
  isLoading: boolean;
  users: dto.IUser[] | [] | undefined;
  onDelete: (username: string) => void;
}

function UserList({ isLoading, users, onDelete }: IUserList) {
  
  return (
    <S.Contain>
      {
        isLoading ?
          <S.Loading>Loading...</S.Loading> :
          users?.map((user) => <UserItem key={user.id} user={user} onDelete={onDelete} />)
      }
    </S.Contain>
  )
}

export default UserList;

