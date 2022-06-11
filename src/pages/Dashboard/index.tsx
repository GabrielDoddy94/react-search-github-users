import { useContext } from "react";

import { GithubContext } from "../../context/GithubContext";

import loadingImage from "../../images/preloader.gif";

import { Navbar } from "../../components/Navbar";
import { Search } from "../../components/Search";
import { Info } from "../../components/Info";
import { User } from "../../components/User";
import { Repos } from "../../components/Repos";

export function Dashboard() {
  const { isLoading } = useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} alt="loading" className="loading-img" />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
}
