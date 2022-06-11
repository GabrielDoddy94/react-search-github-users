import { useState, useEffect, createContext } from "react";
import axios from "axios";

import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";
import {
  IGithubContext,
  IGithubProviderProps,
  IRequestsData,
} from "./@types/GithubContext";

const rootUrl = "https://api.github.com";

export const GithubContext = createContext({} as IGithubContext);

export function GithubProvider({ children }: IGithubProviderProps) {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  async function searchGithubUser(user: any) {
    toggleError();
    setIsLoading(true);

    const response = await axios(`${rootUrl}/users/${user}`).catch(err =>
      console.log(err)
    );

    if (response) {
      setGithubUser(response.data);

      const { login, followers_url } = response.data;
      // repos
      axios(`${rootUrl}/users/${login}/repos?per_page=100`).then(response =>
        setRepos(response.data)
      );
      // followers
      axios(`${followers_url}?per_page=100`).then(response =>
        setFollowers(response.data)
      );
    } else {
      toggleError(true, "there is no user with that username");
    }

    checkRequests();
    setIsLoading(false);
  }

  function checkRequests() {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }: IRequestsData) => {
        const {
          rate: { remaining },
        } = data;

        setRequests(remaining);

        if (remaining === 0) {
          toggleError(true, "sorry, you have exceeded your hourly rate limit!");
        }
      })
      .catch(error => console.log(error));
  }

  function toggleError(show: boolean = false, msg: string = "") {
    setError({ show, msg });
  }

  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        isLoading,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
