import { useFormContext } from 'react-hook-form';

import * as S from './style';

function LoginId() {
  const { register, formState: { errors } } = useFormContext<{admin_id: string}>();
  
  return (
    <S.Wrapper>
      <label>
        Enter manager id
        <S.InputId type="text" {...register('admin_id', {
          required: "Please enter the id",
        })}
          autoComplete="off"
          placeholder="Manager ID"
        />
      </label>
      <S.ErrorMessage>{errors.admin_id?.message}</S.ErrorMessage>
    </S.Wrapper>
  )
}

export default LoginId;
