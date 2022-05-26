import { GithubContext } from "../../context/GithubContext";

import { Wrapper } from "./styles";
import { ExampleChart } from "../Charts/ExampleChart";
import { Pie3D } from "../Charts/Pie3D";
import { Column3D } from "../Charts/Column3D";
import { Bar3D } from "../Charts/Bar3D";
import { Doughnut2D } from "../Charts/Doughnut2d";
import { useContext } from "react";

export function Repos() {
  const { repos } = useContext(GithubContext);

  const languages = repos.reduce((total, item) => {
    const { language } = item;

    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }

    return total;
  }, {} as { [key: string]: { label: string; value: number } });

  const chartData = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={chartData} />
        {/* <ExampleChart data={chartData} /> */}
      </Wrapper>
    </section>
  );
}
