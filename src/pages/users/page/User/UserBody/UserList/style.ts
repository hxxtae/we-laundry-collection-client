import styled from 'styled-components';

import { colors, media, noDrag, scroll } from '../../../../../../utils';

export const Contain = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${colors.boxColor};
  border-radius: 7px;
  padding: 30px 15px;
  margin-bottom: 20px;
  max-height: 80vh;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  ${scroll.bar(10)}
  ${scroll.track()}
  ${scroll.thumb(colors.secondary)}

  ${noDrag()}

  @media ${media.tablet_s} {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Loading = styled.div`
  text-align: center;
  font-size: 20px;
  color: ${colors.light};
  padding: 50px;
`;
