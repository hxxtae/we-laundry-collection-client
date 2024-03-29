import styled from 'styled-components';

import { media, colors } from '../../../../../../styles';

export const Contain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Count = styled.strong`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.secondary};
  padding: 0 20px;

  @media ${media.tablet_s} {
    font-size: 25px;
  }
`;

export const Control = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media ${media.tablet_s} {
    flex-direction: row;
  }
`;

export const Reset = styled.button`
  font-size: 16px;
  color: ${colors.light};
  background-color: ${colors.green};
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;

  &:active {
    opacity: .4;
  }

  @media ${media.tablet_s} {
    margin: 0 20px;
    &:hover {
      opacity: .4;
    }
  }
`;

export const Deletes = styled.button`
  position: relative;
  width: 30px;
  padding: 5px;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;
  opacity: .4;

  &:active {
    opacity: .4;
  }

  @media ${media.tablet_s} {
    margin-right: 30px;
    &:hover {
      opacity: .4;
    }
  }
`;

export const CheckNum = styled.sub`
  position: absolute;
  right: -22px;
  top: 2px;
  width: 25px;
  height: 30px;
  border-radius: 5px;
  color: ${colors.light};
  font-size: 20px;
  font-weight: 600;
`;