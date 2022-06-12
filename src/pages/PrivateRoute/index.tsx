import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { IPrivateRouteProps } from "./@types";

export function PrivateRoute({ children, ...rest }: IPrivateRouteProps) {
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
