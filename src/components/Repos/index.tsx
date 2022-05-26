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

  const chartData = [
    {
      label: "HTML",
      value: "13",
    },
    {
      label: "CSS",
      value: "23",
    },
    {
      label: "JavaScript",
      value: "80",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        <ExampleChart data={chartData} />
      </Wrapper>
    </section>
  );
}
