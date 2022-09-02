import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Collections from '../pages/collections/page/Collection';
//import Users from '../pages/users/application';
import Notfound from '../components/Notfound';

function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Collections />
        </Route>
        <Route path='*'>
          <Notfound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default MainRouter;
