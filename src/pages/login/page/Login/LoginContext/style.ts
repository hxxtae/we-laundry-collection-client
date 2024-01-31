import styled from 'styled-components';

import { colors, media } from '../../../../../styles';

export const Section = styled.section`
  position: relative;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 50px;

  @media ${media.tablet_s} {
    font-size: 35px;
  }
`;

export const Circle = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${colors.green};
`;

export const Any = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: ${colors.secondary};
  margin-top: 50px;

  a {
    position: absolute;
    top: 30px;

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
