import { useRecoilValue } from 'recoil';
import MainLoading from './components/MainLoading';

import { managerAuth } from './pages/login/context/login';
import { useMe } from './pages/login/custom_hooks/useMe';
import LoginRouter from './router/LoginRouter';
import MainRouter from './router/MainRouter';

function App() {
  const manager = useRecoilValue(managerAuth);
  const { isLoading } = useMe();

  return (
    <>
      {
        isLoading ? <MainLoading/> :
        !manager ?
        <LoginRouter /> :
        <MainRouter />
      }
    </>
  );
}

export default App;



