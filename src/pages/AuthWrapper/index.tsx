import { useAuth0 } from "@auth0/auth0-react";

import { IAuthWrapper } from "./@types";

import loadingGif from "../../images/preloader.gif";

import { Wrapper } from "./styles";

export function AuthWrapper({ children }: IAuthWrapper) {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <img src={loadingGif} alt="spinner" />
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }

  return <>{children}</>;
}
