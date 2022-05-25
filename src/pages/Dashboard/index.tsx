import loadingImage from "../../images/preloader.gif";

import { Info } from "../../components/Info";
import { Repos } from "../../components/Repos";
import { User } from "../../components/User";
import { Search } from "../../components/Search";
import { Navbar } from "../../components/Navbar";

// import { GithubContext } from "../../context/context";

export function Dashboard() {
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
