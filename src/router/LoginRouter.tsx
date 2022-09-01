import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Notfound from '../components/Notfound';
import Index from '../pages/login/application';

function LoginRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Index />
        </Route>
        <Route path='*'>
          <Notfound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default LoginRouter;
