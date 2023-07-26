import styled from 'styled-components';

import { colors } from '../../../../utils/config';
import LoginContext from './LoginContext';

function Login() {
  return (
    <Wrapper>
      <LoginContext />

      <BackCircle1 />
      <BackCircle2 />
      <BackCircle3 />
      <BackCircle4 />
    </Wrapper>
  )
}

export default Login;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const BackCircle1 = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background-color: ${colors.boxColor};
  opacity: .7;
  transform: translate3d(-552px, 100px, 0);
  z-index: -1;
`;

const BackCircle2 = styled.div`
  position: absolute;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  background-color: ${colors.boxColor};
  opacity: .7;
  transform: translate3d(202px, -300px, 0);
  z-index: -1;
`;

const BackCircle3 = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: ${colors.boxColor};
  opacity: .7;
  transform: translate3d(402px, 300px, 0);
  z-index: -1;
`;

const BackCircle4 = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: ${colors.boxColor};
  opacity: .7;
  transform: translate3d(802px, 50px, 0);
  z-index: -1;
`;
