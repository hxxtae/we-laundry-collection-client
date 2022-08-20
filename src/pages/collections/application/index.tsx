import styled from 'styled-components';
import Containers from '../../../components/Containers';
import { media } from '../../../utils/mixins';
import CollectionHeader from './CollectionHeader';
import CollectionList from './CollectionList';

function Index() {
  return (
    <Containers >
      <>
        <Wrapper>
          <H1>Hxxtae</H1>
          <H2>Collection status</H2>
        </Wrapper>
        <CollectionHeader />
        <CollectionList />
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
  font-size: 25px;
  font-weight: 600;
  line-height: 1.2;
  margin: 20px 0;
`;



