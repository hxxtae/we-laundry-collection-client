import styled from 'styled-components';
import { colors, media } from '../../styles';

function Loadings() {
  return (
    <LoadingOverlay>
      <LoadingBox>
        <Loading>Loading...</Loading>
      </LoadingBox>
    </LoadingOverlay>
  )
}

export default Loadings;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .12);
  z-index: 100;
`;

const LoadingBox = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 60px;
  border: 2px solid ${colors.boxColor};
  background-color: ${colors.bgColor};
  border-radius: 7px;

  @media ${media.tablet_s} {
    width: 200px;
    height: 100px;
  }
`;

const Loading = styled.span`
  color: ${colors.light};
  font-size: 16px;
`;
