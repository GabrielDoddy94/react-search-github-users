import { useAuth0 } from "@auth0/auth0-react";

import loginImg from "../../images/login-img.svg";

import { Wrapper } from "./styles";

export function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user" />
        <h1>github user</h1>
        <button className="btn" onClick={loginWithRedirect}>
          login / signup
        </button>
      </div>
    </Wrapper>
  );
}
