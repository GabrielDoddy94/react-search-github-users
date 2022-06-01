import { useContext } from "react";

import { GithubContext } from "../../context/GithubContext";

import { Wrapper } from "./styles";
import { Pie3D } from "../Charts/Pie3D";
import { Column3D } from "../Charts/Column3D";
import { Bar3D } from "../Charts/Bar3D";
import { Doughnut2D } from "../Charts/Doughnut2d";

export function Repos() {
  const { repos } = useContext(GithubContext);

  // languages
  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;

    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }

    return total;
  }, {} as { [key: string]: { label: string; value: number; stars: number } });

  const mostUsedLanguages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const mostPopularLanguages = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map(item => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  // stars, forks
  const { stars, forks } = repos.reduce(
    (total, item) => {
      const { name, stargazers_count, forks } = item;

      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };

      return total;
    },
    {
      stars: {} as { [key: number]: { label: string; value: number } },
      forks: {} as { [key: number]: { label: string; value: number } },
    }
  );

  const mostStarsRepos = Object.values(stars).slice(-5).reverse();
  const mostForksRepos = Object.values(forks).slice(-5).reverse();

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsedLanguages} />
        <Column3D data={mostStarsRepos} />
        <Doughnut2D data={mostPopularLanguages} />
        <Bar3D data={mostForksRepos} />
      </Wrapper>
    </section>
  );
}
