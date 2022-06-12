import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { AuthWrapper } from "./pages/AuthWrapper";
import { PrivateRoute } from "./pages/PrivateRoute";

export function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact>
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}
