import styled from 'styled-components';

import { media, colors } from '../../../../styles';

export const HeaderBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 0 10px;

  @media ${media.pc_s} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const H1 = styled.h1`
  font-size: 28px;
  font-weight: 600;

  @media ${media.pc_s} {
    align-self: center;
  }
`;

export const H2 = styled.h2`
  position: relative;
  font-size: 25px;
  font-weight: 600;
  line-height: 1.2;
  margin: 20px 0;
  width: 100%;

  @media ${media.pc_s} {
    width: auto;
  }
`;

export const Logout = styled.button`
  position: absolute;
  top: 3px;
  right: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.secondary};
  cursor: pointer;

  @media ${media.pc_s} {
    top: 35px;

    &:hover {
      opacity: .6;
    }
  }
`;
