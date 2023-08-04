import styled from 'styled-components';

import { media } from '../../../../../../../../utils';
import { colors } from '../../../../../../../../styles';

export const Label = styled.label`
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
