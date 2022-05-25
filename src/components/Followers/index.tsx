import { useContext } from "react";

import { GithubContext } from "../../context/GithubContext";

import { Wrapper } from "./styles";

export function Followers() {
  const { followers } = useContext(GithubContext);

  return (
    <Wrapper>
      <div className="followers">
        {followers.map(follower => {
          const { id, login, html_url, avatar_url: img } = follower;

          return (
            <article key={id}>
              <img src={img} alt={login} />

              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
}
