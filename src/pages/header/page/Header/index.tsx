import { Containers } from '../../../../components';
import { useLogout } from '../../../../hooks/querys/login';
import * as S from './style';

function Header() {
  const { isLoading, logout } = useLogout();

  const onLogout = () => {
    return isLoading || logout();
  }

  return (
    <Containers>
      <S.HeaderBody>
        <S.H1>Hxxtae</S.H1>
        <S.H2>
          Collection status
          <S.Logout type="button" onClick={onLogout}>Log out</S.Logout>
        </S.H2>
      </S.HeaderBody>
    </Containers>
  )
}

export default Header;

