import styled from 'styled-components';

import { media, colors } from '../../../../../styles';

export const Section = styled.section`
  padding: 20px 0;
`;

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.boxColor};
  border-radius: 7px;
  padding: 30px;
  margin-bottom: 20px;

  @media ${media.pc_s} {
    flex-direction: row;
  }
`;

export const Circle = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${colors.green};
`;

export const CircleShadow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${colors.green};
  animation-name: circles;
  animation-timing-function: cubic-bezier(0.000, 0.000, 0.011, 0.997);
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  
  @keyframes circles {
    from {
      transform: scale(1);
      opacity: 1;
    }

    to {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;


export const Title = styled.span`
  font-size: 25px;
  font-weight: 600;
  padding: 15px 12px;
  text-align: center;

  strong {
    color: ${colors.green};
  }
`;
