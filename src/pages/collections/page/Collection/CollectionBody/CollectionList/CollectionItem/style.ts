import styled from 'styled-components';

import { colors, media } from '../../../../../../../styles';

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid ${colors.bgColor};
  padding: 20px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media ${media.tablet_s} {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 0;
`;

export const Type = styled.span`
  font-size: 16px;
  color: ${colors.secondary};
`;

export const Delete = styled.button`
  font-size: 16px;
  color: ${colors.light};
  background-color: ${colors.red};
  border-radius: 5px;
  padding: 5px;
  margin-left: auto;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;

  &:active {
    opacity: .4;
  }

  @media ${media.tablet_s} {
    &:hover {
    opacity: .4;
  }
}
`;