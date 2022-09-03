import styled from 'styled-components';

import { colors } from '../../../utils/config';
import { media } from '../../../utils/mixins';
import { useLogout } from '../../login/application/custom_hooks';
import Containers from '../../../components/Containers';
import CollectionHeader from './CollectionHeader';
import { CollectionBody } from './CollectionBody';

function Index() {
  const { isLoading, logout } = useLogout();
  const onLogout = () => {
    return isLoading || logout();
  }

  return (
    <Containers >
      <>
        <Wrapper>
          <H1>Hxxtae</H1>
          <H2>
            Collection status
            <Logout type="button" onClick={onLogout}>Log out</Logout>
          </H2>
        </Wrapper>
        <CollectionHeader />
        <CollectionBody />
      </>
    </Containers>
  )
}

export default Index;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 0 10px;

  @media ${media.pc_s} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const H1 = styled.h1`
  font-size: 28px;
  font-weight: 600;

  @media ${media.pc_s} {
    align-self: center;
  }
`;

const H2 = styled.h2`
  position: relative;
  font-size: 25px;
  font-weight: 600;
  line-height: 1.2;
  margin: 20px 0;
  width: 100%;

  @media ${media.pc_s} {
    width: auto;
  }
`;

const Logout = styled.button`
  position: absolute;
  top: 3px;
  right: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.secondary};
  cursor: pointer;

  @media ${media.pc_s} {
    top: 35px;

    &:hover {
      opacity: .6;
    }
  }
`;



