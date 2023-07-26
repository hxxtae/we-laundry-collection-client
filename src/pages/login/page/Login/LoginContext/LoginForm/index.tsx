import styled from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';

import { colors } from '../../../../../../utils/config';
import { useLogin } from '../../../../application/custom_hooks';
import { dto } from '../../../../application/dto';
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
    <Section>
      <FormProvider {...method}>
        <Form onSubmit={method.handleSubmit(onLogin)}>
          <LoginId />
          <LoginPw />
          <Submit type="submit">Log in</Submit>
        </Form>
      </FormProvider>
    </Section>
  )
}

export default LoginForm;

const Section = styled.section`
  max-width: 400px;
  border-radius: 7px;
  margin: 10px;
  overflow: hidden;
  background-color: ${colors.light};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 30px 40px;
`;

const Submit = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${colors.green};
  border-radius: 10px;
  color: ${colors.light};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: .6;
  }
`;


