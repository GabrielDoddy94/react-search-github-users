import { ReactNode } from "react";

export interface IGithubProviderProps {
  children: ReactNode;
}

type GithubUser = {
  id: number;
};

type GithubRepos = {
  id: number;
};

type GithubFollowers = {
  id: number;
};

export interface IGithubContext {
  githubUser: GithubUser;
  repos: GithubRepos[];
  followers: GithubFollowers[];
}
