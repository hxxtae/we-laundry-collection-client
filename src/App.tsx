import { useRecoilValue } from 'recoil';

import { useQueriesMutating } from './hooks/querys';
import { Loadings, MainLoading } from './components';
import { LoginRouter, MainRouter } from './router';
import { managerAuth } from './pages/login/application/context/login';
import { useMe } from './pages/login/application/custom_hooks';

function App() {
  const manager = useRecoilValue(managerAuth);
  const { isLoading } = useMe();
  const { isLoading: isMutating } = useQueriesMutating();

  return (
    <>
      {
        isLoading ? <MainLoading/> :
          !manager ? <LoginRouter /> :
            <MainRouter />
      }
      {
        isMutating && <Loadings />
      }
    </>
  );
}

export default App;
