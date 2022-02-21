import React from "react";
import Event from "../pages/Event";
import Login from "../pages/Login";

export type IRoute = {
  path: string;
  exact?: boolean;
  component: React.ComponentType;
};

export enum RootNames {
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRoutes: Array<IRoute> = [
  { path: RootNames.LOGIN, exact: true, component: Login },
];

export const privateRoutes: Array<IRoute> = [
  { path: RootNames.EVENT, exact: true, component: Event },
];
