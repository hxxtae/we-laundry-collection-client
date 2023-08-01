import { FormProvider, useForm } from 'react-hook-form';

import { useLogin } from '../../../../application/custom_hooks';
import { dto } from '../../../../application/dto';
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
          <S.Submit type="submit">Log in</S.Submit>
        </S.Form>
      </FormProvider>
    </S.Section>
  )
}

export default LoginForm;


