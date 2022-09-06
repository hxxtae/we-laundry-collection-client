import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Collection } from '../pages/collections/page';
import { Loadings, NotFound } from '../components';
import { User } from '../pages/users/page';
import { useIsMutating } from 'react-query';

function MainRouter() {

  const isMutating = useIsMutating();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Collection />
          <User />
          {isMutating > 0 && <Loadings />}
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default MainRouter;
