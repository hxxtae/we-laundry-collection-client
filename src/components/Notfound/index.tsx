import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors, media } from '../../styles';

function Notfound() {
  return (
    <Section>
      <Content>
        <Status>404</Status>
        <Line/>
        <Wrapper>
          <Title>Page not found</Title>
          <Desc>Please check the URL in the address bar and try again.</Desc>
        </Wrapper>
      </Content>
      <ButtonGroup>
        <Link to="/">
          <Home type="button">Go back home</Home>
        </Link>
        <Support type="button">Contact support</Support>
      </ButtonGroup>
    </Section>
  )
}

export default Notfound;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media ${media.tablet_s} {
    flex-direction: row;
  }
`;

const Status = styled.span`
  font-size: 35px;
  font-weight: 600;
  color: ${colors.green};

  @media ${media.tablet_s} {
    align-self: flex-start;
  }
`;

const Line = styled.div`
  display: none;
  border-right: 1px solid ${colors.secondary};
  height: 100%;
  margin: 0 15px;

  @media ${media.tablet_s} {
    display: block;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${media.tablet_s} {
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
  color: ${colors.light};
  margin-bottom: 20px;

  @media ${media.tablet_s} {
    margin-bottom: 5px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.tertiary};
  text-align: center;
  max-width: 275px;

  @media ${media.tablet_s} {
    text-align: left;
    max-width: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Home = styled.button`
  background-color: ${colors.green};
  border-radius: 7px;
  color: ${colors.light};
  padding: 10px 15px;
  margin-right: 15px;
  cursor: pointer;
`;

const Support = styled.button`
  background-color: ${colors.secondary};
  border-radius: 7px;
  color: ${colors.light};
  padding: 10px 15px;
  cursor: pointer;
`;


