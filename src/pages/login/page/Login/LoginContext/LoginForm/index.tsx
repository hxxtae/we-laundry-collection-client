import { FormProvider, useForm } from 'react-hook-form';

import { useLogin } from '../../../../../../hooks/querys/login';
import * as dto from '../../../../../../types/login';
import * as S from './style';
import LoginId from './LoginId';
import LoginPw from './LoginPw';

function LoginForm() {  
  const { login, isMutating } = useLogin();
  const method = useForm<dto.ILoginForm>();
  const onLogin = ({ admin_id, admin_pw }: dto.ILoginForm) => {
    const data = { admin_id, admin_pw };
    isMutating || login(data);
  }

  return (
    <S.Section>
      <FormProvider {...method}>
        <S.Form onSubmit={method.handleSubmit(onLogin)}>
          <LoginId />
          <LoginPw />
          <S.Submit type="submit" disabled={isMutating}>Log in</S.Submit>
        </S.Form>
      </FormProvider>
    </S.Section>
  )
}

export default LoginForm;


