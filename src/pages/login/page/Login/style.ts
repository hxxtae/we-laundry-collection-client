import styled from 'styled-components';

import { colors } from '../../../../utils/config';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

export const BackCircle1 = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background-color: ${colors.boxColor};
  opacity: .7;
  transform: translate3d(-552px, 100px, 0);
  z-index: -1;
`;

export const BackCircle2 = styled.div`
  position: absolute;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  background-color: ${colors.boxColor};
  opacity: .7;
  transform: translate3d(202px, -300px, 0);
  z-index: -1;
`;

export const BackCircle3 = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: ${colors.boxColor};
  opacity: .7;
  transform: translate3d(402px, 300px, 0);
  z-index: -1;
`;

export const BackCircle4 = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: ${colors.boxColor};
  opacity: .7;
  transform: translate3d(802px, 50px, 0);
  z-index: -1;
`;
