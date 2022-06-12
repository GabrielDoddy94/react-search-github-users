import { ReactNode } from "react";

export interface IPrivateRouteProps {
  children: ReactNode;
  path: string;
  exact: boolean;
}
