import { useContext } from "react";

import { GithubContext } from "../../context/GithubContext";

import { Wrapper } from "./styles";
import { ExampleChart } from "../Charts/ExampleChart";
import { Pie3D } from "../Charts/Pie3D";
import { Column3D } from "../Charts/Column3D";
import { Bar3D } from "../Charts/Bar3D";
import { Doughnut2D } from "../Charts/Doughnut2d";

export function Repos() {
  const { repos } = useContext(GithubContext);

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

  const mostUsed = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map(item => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsed} />
        <div></div>
        <Doughnut2D data={mostPopular} />
      </Wrapper>
    </section>
  );
}
