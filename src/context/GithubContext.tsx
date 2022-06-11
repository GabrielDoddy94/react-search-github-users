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

    const response = await axios(`${rootUrl}/users/${user}`).catch(err =>
      console.log(err)
    );

    console.log(response);

    if (response) {
      setGithubUser(response.data);
    } else {
      toggleError(true, "there is no user with that username");
    }
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
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
