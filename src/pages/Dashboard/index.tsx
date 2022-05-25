import loadingImage from "../../images/preloader.gif";

import { Navbar } from "../../components/Navbar";
import { Search } from "../../components/Search";
import { Info } from "../../components/Info";
import { User } from "../../components/User";
import { Repos } from "../../components/Repos";

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
