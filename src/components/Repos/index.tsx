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

  return <ExampleChart />;
}
