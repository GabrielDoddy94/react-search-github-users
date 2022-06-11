import { FormEvent, useContext, useState } from "react";
import { MdSearch } from "react-icons/md";

import { GithubContext } from "../../context/GithubContext";

import { Wrapper, ErrorWrapper } from "./styles";

export function Search() {
  const [user, setUser] = useState("");
  const { requests, error } = useContext(GithubContext);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="section">
      <Wrapper className="section-center">
        {error.show && (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter github user"
              value={user}
              onChange={e => setUser(e.target.value)}
            />
            {requests > 0 && <button type="submit">search</button>}
          </div>
        </form>

        <h3>requests : {requests} / 60</h3>
      </Wrapper>
    </section>
  );
}
