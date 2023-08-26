import styled from 'styled-components';

import { colors } from '../../../../../../styles';

export const Section = styled.section`
  max-width: 400px;
  border-radius: 7px;
  margin: 10px;
  overflow: hidden;
  background-color: ${colors.light};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 30px 40px;
`;

export const Submit = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${colors.green};
  border-radius: 10px;
  color: ${colors.light};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;

  &:disabled {
    cursor: not-allowed;
    opacity: .6;
  }

  &:hover {
    opacity: .6;
  }
`;

