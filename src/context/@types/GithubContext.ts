import { ReactNode } from "react";

export interface IGithubProviderProps {
  children: ReactNode;
}

type GithubUser = {
  name: string;
  bio: string;
  company: string;
  twitter_username: string;
  blog: string;
  location: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
};

type GithubRepos = {
  name: string;
  id: number;
  language: string | null;
  stargazers_count: number;
  forks: number;
};

type GithubFollowers = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

export interface IGithubContext {
  githubUser: GithubUser;
  repos: GithubRepos[];
  followers: GithubFollowers[];
}
