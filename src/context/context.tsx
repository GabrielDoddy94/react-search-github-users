import { useState, useEffect, createContext, ReactNode } from "react";
import axios from "axios";

import mockUser from "./mockData/mockUser";
import mockRepos from "./mockData/mockRepos";
import mockFollowers from "./mockData/mockFollowers";

interface GithubProviderProps {
  children: ReactNode;
}

const rootUrl = "https://api.github.com";

export const GithubContext = createContext("");

export function GithubProvider({ children }: GithubProviderProps) {
  return (
    <GithubContext.Provider value={"hello world"}>
      {children}
    </GithubContext.Provider>
  );
}
