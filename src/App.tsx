import React from 'react';
import { useRecoilState } from 'recoil';
import { managerAuth } from './pages/login/context/login';
import LoginRouter from './router/LoginRouter';
import MainRouter from './router/MainRouter';

function App() {
  const [manager, setManager] = useRecoilState(managerAuth);

  return (
    <>
      {
        !manager ?
        <LoginRouter /> :
        <MainRouter />
      }
    </>
  );
}

export default App;
