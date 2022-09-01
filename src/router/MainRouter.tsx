import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Collections from '../pages/collections/application';
import Users from '../pages/users/application';
import Notfound from '../components/Notfound';

function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Collections />
          <Users />
        </Route>
        <Route path='*'>
          <Notfound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default MainRouter;
