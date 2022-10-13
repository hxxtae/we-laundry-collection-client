import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NotFound } from '../components';
import { Header } from '../pages/header/page';
import { Collection } from '../pages/collections/page';
import { User } from '../pages/users/page';
import { Footer } from '../pages/footer/page';

function MainRouter() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>
          <Header />
          <Collection />
          <User />
          <Footer />
        </Route>
        <Route exact path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default MainRouter;
