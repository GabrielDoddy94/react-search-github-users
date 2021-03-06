import { useContext } from "react";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

import { GithubContext } from "../../context/GithubContext";

import { Wrapper } from "./styles";
import { Item } from "./Item";

export function Info() {
  const { githubUser } = useContext(GithubContext);
  const { followers, following, public_gists, public_repos } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <Wrapper className="section-center">
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </Wrapper>
  );
}
