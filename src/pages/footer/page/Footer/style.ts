import styled from 'styled-components';

import { colors } from '../../../../styles';

export const FooterBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 40px;
  color: ${colors.secondary};

  a {
    margin-top: 10px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 3px;
      vertical-align: middle;
    }

    span {
      vertical-align: middle;
    }
    
    &:hover {
      opacity: .5;
    }
  }
`;

export const Description = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
