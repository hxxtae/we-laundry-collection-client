import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { colors } from '../../../utils/config';

function LoginId() {

  const { register, formState: { errors } } = useFormContext<{admin_id: string}>();
  
  return (
    <Wrapper>
      <label>
        Enter manager id
        <InputId type="text" {...register('admin_id', {
          required: "Please enter the id",
        })}
          autoComplete="off"
          placeholder="Manager ID"
        />
      </label>
      <ErrorMessage>{errors.admin_id?.message}</ErrorMessage>
    </Wrapper>
  )
}

export default LoginId;

const Wrapper = styled.div`
  padding: 20px 0;

  label {
    font-size: 17px;
    font-weight: 600;
    color: ${colors.secondary};
  }
`;

const InputId = styled.input`
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