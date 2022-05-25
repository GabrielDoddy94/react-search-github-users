import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { AuthWrapper } from "./pages/AuthWrapper";
import { PrivateRoute } from "./pages/PrivateRoute";

export function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
}
