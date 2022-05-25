import { useContext } from "react";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

import { GithubContext } from "../../context/GithubContext";

import { Wrapper } from "./styles";

export function Info() {
  const data = useContext(GithubContext);

  console.log(data);

  return <h2>user info component</h2>;
}
