import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import Nav from '../components/Nav';
import WorkPage from '../pages/WorkPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="main__container">
          <Nav />
          <Switch>
            <Route component={AboutPage} path="/" exact />
            <Route component={WorkPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
