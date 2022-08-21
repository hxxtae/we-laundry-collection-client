import React from 'react';
import LoginRouter from './router/LoginRouter';
import MainRouter from './router/MainRouter';

function App() {
  return (
    <>
      {
        false ?
          <MainRouter /> :
          <LoginRouter />
      }
    </>
  );
}

export default App;
