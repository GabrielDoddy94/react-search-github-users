import { useState, useEffect, createContext, ReactNode } from "react";
import axios from "axios";

import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";
import { IGithubContext, IGithubProviderProps } from "./@types/GithubContext";

export const GithubContext = createContext({} as IGithubContext);

const rootUrl = "https://api.github.com";

export function GithubProvider({ children }: IGithubProviderProps) {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  );
}
