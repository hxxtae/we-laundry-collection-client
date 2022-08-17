import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from '../pages/collections/application';
import Notfound from '../components/Notfound';

function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Index />
        </Route>
        <Route exact path='*'>
          <Notfound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default MainRouter;
