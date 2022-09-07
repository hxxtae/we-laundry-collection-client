import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Collection } from '../pages/collections/page';
import { Loadings, NotFound } from '../components';
import { User } from '../pages/users/page';

function MainRouter() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Collection />
          <User />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default MainRouter;
