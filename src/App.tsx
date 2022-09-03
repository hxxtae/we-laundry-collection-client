import { useRecoilValue } from 'recoil';

import { managerAuth } from './pages/login/application/context/login';
import { useMe } from './pages/login/application/custom_hooks';
import MainLoading from './components/MainLoading';
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



