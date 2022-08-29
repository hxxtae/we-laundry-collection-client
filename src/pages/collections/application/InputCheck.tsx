import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

import { colors } from '../../../utils/config';
import { media } from '../../../utils/mixins';

interface IInputCheck {
  thisName: string;
}

function InputCheck({ thisName }: IInputCheck) {
  const { register } = useFormContext();

  return (
    <Label>
      <input type="checkbox" {...register('names')} value={thisName} />
    </Label>
  )
}

export default InputCheck;

const Label = styled.label`
  align-self: flex-start;
  padding: 10px;

  input {
    transform: scale(1.2);
    accent-color: ${colors.red};
  }

  @media ${media.tablet_s} {
    input {
      transform: scale(1.5);
    }
  }
`;
