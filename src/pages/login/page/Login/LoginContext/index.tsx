import * as S from './style';
import LoginForm from './LoginForm';

function LoginContext() {
  return (
    <S.Section>
      <S.Title>
        <S.Circle />Welaundry Manager
      </S.Title>
      <LoginForm />
      <S.Any>
        Hxxtae &reg; 2022. All Rights Reserved
        <a href="https://github.com/hxxtae/we-laundry-collection-client" target="blank">
          <img src="./assets/svg/github.svg" alt='github icon'/>
          <span>GitHub</span>
        </a>
      </S.Any>
    </S.Section>
  )
}

export default LoginContext;
