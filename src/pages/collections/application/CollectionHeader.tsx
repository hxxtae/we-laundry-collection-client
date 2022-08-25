import styled from 'styled-components';
import { colors } from '../../../utils/config';
import { media } from '../../../utils/mixins';

function CollectionHeader() {
  return (
    <Section>
      <Contain>
        <Circle>
          <CircleShadow />
        </Circle>
        <Title>Welaundry DB <strong>collection</strong>&nbsp;list</Title>
      </Contain>
    </Section>
  )
}

export default CollectionHeader;

const Section = styled.section`
  padding: 20px 0;
`;

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.boxColor};
  border-radius: 7px;
  padding: 30px;
  margin-bottom: 20px;

  @media ${media.pc_s} {
    flex-direction: row;
  }
`;

const Circle = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${colors.green};
`;

const CircleShadow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${colors.green};
  animation-name: circles;
  animation-timing-function: cubic-bezier(0.000, 0.000, 0.011, 0.997);
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  
  @keyframes circles {
    from {
      transform: scale(1);
      opacity: 1;
    }

    to {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;


const Title = styled.span`
  font-size: 25px;
  font-weight: 600;
  padding: 15px 12px;
  text-align: center;

  strong {
    color: ${colors.green};
  }
`;
