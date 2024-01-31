import { useFormContext } from 'react-hook-form';

import * as S from './style';

function LoginPw() {
  const { register, formState: { errors } } = useFormContext<{admin_pw: string}>();

  return (
    <S.Wrapper>
      <label>
        Enter manager password
        <S.InputPw type="password" {...register('admin_pw', {
          required: 'Please enter the password',
        })}
        placeholder="******"/>
      </label>
      <S.ErrorMessage>{ errors.admin_pw?.message }</S.ErrorMessage>
    </S.Wrapper>
  )
}

export default LoginPw;
