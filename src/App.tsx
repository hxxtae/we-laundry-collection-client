import { useRecoilValue } from 'recoil';

import { LoginRouter, MainRouter } from './router';
import { managerAuth } from './contexts/login';
import { useMe } from './hooks/querys/login';

function App() {
  const manager = useRecoilValue(managerAuth);
  useMe();

  return (
    !manager ? <LoginRouter /> : <MainRouter />
  );
}

export default App;
