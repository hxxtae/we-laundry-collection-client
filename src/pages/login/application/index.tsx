import styled from 'styled-components';
import Containers from '../../../components/Containers';
import LoginForm from './LoginForm';


function Index() {
  return (
    <Containers>
      <Wrapper>
        <LoginForm />
      </Wrapper>
    </Containers>
  )
}

export default Index;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;