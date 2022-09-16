import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

import { colors } from '../../../../../utils/config';

function LoginPw() {
  const { register, formState: { errors } } = useFormContext<{admin_pw: string}>();

  return (
    <Wrapper>
      <label>
        Enter manager password
        <InputPw type="password" {...register('admin_pw', {
          required: 'Please enter the password',
        })}
        placeholder="******"/>
      </label>
      <ErrorMessage>{ errors.admin_pw?.message }</ErrorMessage>
    </Wrapper>
  )
}

export default LoginPw;

const Wrapper = styled.div`
  padding-bottom: 20px;

  label {
    font-size: 17px;
    font-weight: 600;
    color: ${colors.secondary};
  }
`;

const InputPw = styled.input`
  border: 1px solid ${colors.tertiary};
  border-radius: 2px;
  width: 100%;
  padding: 13px;
  margin-top: 20px;
  font-size: 20px;
  color: ${colors.boxColor};
`;

const ErrorMessage = styled.p`
  font-size: 15px;
  color: ${colors.red};
  margin-top: 5px;
`;
