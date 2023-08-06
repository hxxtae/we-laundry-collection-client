import * as S from './style';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <S.Section>
      <S.Content>
        <S.Status>404</S.Status>
        <S.Line/>
        <S.Wrapper>
          <S.Title>Page not found</S.Title>
          <S.Desc>Please check the URL in the address bar and try again.</S.Desc>
        </S.Wrapper>
      </S.Content>
      <S.ButtonGroup>
        <Link to="/">
          <S.Home type="button">Go back home</S.Home>
        </Link>
        <S.Support type="button">Contact support</S.Support>
      </S.ButtonGroup>
    </S.Section>
  )
}

export default Notfound;
