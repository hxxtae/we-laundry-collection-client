import * as S from './style';
import { dto } from '../../../../../application/dto';

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
