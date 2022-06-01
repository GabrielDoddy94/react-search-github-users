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

  function checkRequests() {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }: IRequestsData) => {
        const {
          rate: { remaining },
        } = data;

        setRequests(remaining);

        if (remaining === 0) {
          // throw an error
        }
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers, requests }}>
      {children}
    </GithubContext.Provider>
  );
}
