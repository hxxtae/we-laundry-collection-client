import * as dto from '../../../../../../../types/users';
import * as S from './style';

interface IUserItem {
  user: dto.IUser;
  onDelete: (username: string) => void;
}

function UserItem({ user, onDelete }: IUserItem) {

  return (
    <S.Item>
      <S.Wrapper>
        <S.Name>{user.username}</S.Name>
        <S.Type>{`username`}</S.Type>
      </S.Wrapper>
      <S.Delete type="button" onClick={() => onDelete(user.username)}>Delete</S.Delete>
    </S.Item>
  )
}

export default UserItem;
