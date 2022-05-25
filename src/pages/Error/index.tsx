import { Link } from "react-router-dom";

import { Wrapper } from "./styles";

export function Error() {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </Wrapper>
  );
}
