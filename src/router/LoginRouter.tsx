import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NotFound } from '../components';
import { Login } from '../pages/login/page';

function LoginRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Login />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default LoginRouter;
