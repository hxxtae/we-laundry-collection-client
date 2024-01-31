import styled from 'styled-components';

import { colors } from '../../styles';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.bgColor};
`;

export const LoadingIcon = styled.span`
  position: relative;
  color: white;
  font-size: 20px;

  &:after {
    content: '. . .';
    position: absolute;
    display: inline-block;
    margin-left: 3px;
    width: 50px;
    height: 20px;
    overflow: hidden;
    animation-duration: 1s;
    animation-name: loadingAnimate;
    animation-iteration-count: infinite;
  }

  @keyframes loadingAnimate {
    from {
      width: 5px;
    }

    to {
      width: 30px;
    }
  }
`;
