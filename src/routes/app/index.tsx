import { Redirect, Route, Switch } from 'react-router-dom';

import { LandPage } from 'pages/LandPage';

const Routes = () => {
  return (
    <Switch>
      <Redirect path="/" exact to="/home" />

      <Route
        path="/home"
        exact
        component={LandPage}
      />
    </Switch>
  );
};

export default Routes;
