import { ReactNode } from "react";

export interface IGithubProviderProps {
  children: ReactNode;
}

type GithubUser = {
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
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
