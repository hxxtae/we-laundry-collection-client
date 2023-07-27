import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { lazy } from 'react';

const Header = lazy(() => import('../pages/header/page/Header'));
const Collection = lazy(() => import('../pages/collections/page/Collection'));
const User = lazy(() => import('../pages/users/page/User'));
const Footer = lazy(() => import('../pages/footer/page/Footer'));
const NotFound = lazy(() => import('../components/Notfound'));

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
