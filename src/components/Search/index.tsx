import { FormEvent, useState } from "react";
import { MdSearch } from "react-icons/md";

// import { GithubContext } from "../context/context";

import { Wrapper, ErrorWrapper } from "./styles";

export function Search() {
  const [user, setUser] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="section">
      <Wrapper className="section-center">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter github user"
              value={user}
              onChange={e => setUser(e.target.value)}
            />
            <button type="submit">search</button>
          </div>
        </form>

        <h3>requests : 60 / 60</h3>
      </Wrapper>
    </section>
  );
}
