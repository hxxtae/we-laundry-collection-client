import styled from 'styled-components';

import { colors, media } from '../../styles';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media ${media.tablet_s} {
    flex-direction: row;
  }
`;

export const Status = styled.span`
  font-size: 35px;
  font-weight: 600;
  color: ${colors.green};

  @media ${media.tablet_s} {
    align-self: flex-start;
  }
`;

export const Line = styled.div`
  display: none;
  border-right: 1px solid ${colors.secondary};
  height: 100%;
  margin: 0 15px;

  @media ${media.tablet_s} {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${media.tablet_s} {
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
  color: ${colors.light};
  margin-bottom: 20px;

  @media ${media.tablet_s} {
    margin-bottom: 5px;
  }
`;

export const Desc = styled.p`
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

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Home = styled.button`
  background-color: ${colors.green};
  border-radius: 7px;
  color: ${colors.light};
  padding: 10px 15px;
  margin-right: 15px;
  cursor: pointer;
`;

export const Support = styled.button`
  background-color: ${colors.secondary};
  border-radius: 7px;
  color: ${colors.light};
  padding: 10px 15px;
  cursor: pointer;
`;


