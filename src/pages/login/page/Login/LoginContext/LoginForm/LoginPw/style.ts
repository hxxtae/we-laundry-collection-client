import styled from 'styled-components';

import { colors } from '../../../../../../../styles';

export const Wrapper = styled.div`
  padding-bottom: 20px;

  label {
    font-size: 17px;
    font-weight: 600;
    color: ${colors.secondary};
  }
`;

export const InputPw = styled.input`
  border: 1px solid ${colors.tertiary};
  border-radius: 2px;
  width: 100%;
  padding: 13px;
  margin-top: 20px;
  font-size: 20px;
  color: ${colors.boxColor};
`;

export const ErrorMessage = styled.p`
  font-size: 15px;
  color: ${colors.red};
  margin-top: 5px;
`;
