import * as S from './style';

interface IUserControl {
  total: number;
}

function UserControl({ total }: IUserControl) {
  return (
    <S.Contain>
      <S.Title>
        Users
        <S.Count>{`Total: ${total}`}</S.Count>
      </S.Title>
      <S.Control>
        <S.Reset type="button">Reset</S.Reset>
        <S.Deletes type="submit">
          <img src="./assets/svg/trash-can-solid.svg" alt="delete all button of user" />
          <S.CheckNum>0</S.CheckNum>
        </S.Deletes>
      </S.Control>
    </S.Contain>
  )
}

export default UserControl;
