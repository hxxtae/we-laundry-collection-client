import * as S from './style';
import { useFormContext } from 'react-hook-form';

interface IInputCheck {
  thisName: string;
}

function InputCheck({ thisName }: IInputCheck) {
  const { register } = useFormContext();

  return (
    <S.Label>
      <input type="checkbox" {...register('names')} value={thisName} />
    </S.Label>
  )
}

export default InputCheck;
