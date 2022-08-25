import styled from 'styled-components';
import { colors } from '../../../utils/config';
import { media } from '../../../utils/mixins';
import LoginForm from './LoginForm';

function LoginContext() {
  return (
    <Section>
      <Title>
        <Circle />
        Welaundry Manager
      </Title>
      <LoginForm />
      <Any>
        Hxxtae &reg; 2022. All Rights Reserved
        <a href="https://github.com/hxxtae/we-laundry-collection-client" target="blank">
          <img src="./assets/svg/github.svg" alt='github icon'/>
          <span>GitHub</span>
        </a>
      </Any>
    </Section>
  )
}

export default LoginContext;

const Section = styled.section`
  position: relative;
`;

const Title = styled.h1`
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

const Circle = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${colors.green};
`;

const Any = styled.p`
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
