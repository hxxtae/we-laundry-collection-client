import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { lazy } from 'react';

const Login = lazy(() => import('../pages/login/page/Login'));
const NotFound = lazy(() => import('../components/Notfound'));

function LoginRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Login />
        </Route>
        <Route exact path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default LoginRouter;
