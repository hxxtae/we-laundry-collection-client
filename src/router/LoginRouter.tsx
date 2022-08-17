import { BrowserRouter, Route, Switch } from 'react-router-dom';

function LoginRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'}>

        </Route>
        <Route exact path='*'>

        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default LoginRouter;
