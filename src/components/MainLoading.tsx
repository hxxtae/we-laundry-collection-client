import styled from 'styled-components';
import { colors } from '../utils/config';

function MainLoading() {
  return (
    <LoadingContainer>
      <LoadingIcon>Loading</LoadingIcon>
    </LoadingContainer>
  )
}

export default MainLoading;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.bgColor};
`;

const LoadingIcon = styled.span`
  color: white;
  font-size: 20px;
`;
