import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function PrivateRoute({ children, ...rest }: any) {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Redirect to="/login" />;
      }}
    />
  );
}
