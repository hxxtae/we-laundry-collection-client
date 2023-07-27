import { useRecoilValue } from 'recoil';

import { LoginRouter, MainRouter } from './router';
import { managerAuth } from './pages/login/application/context/login';
import { useMe } from './pages/login/application/custom_hooks';

function App() {
  const manager = useRecoilValue(managerAuth);
  useMe();

  return (
    !manager ? <LoginRouter /> : <MainRouter />
  );
}

export default App;
