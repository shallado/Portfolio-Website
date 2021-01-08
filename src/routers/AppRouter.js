import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={AboutPage} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
