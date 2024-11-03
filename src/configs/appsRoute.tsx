import { Routes } from "@/@types/routes";
import { lazy } from "react";

const appsRoute: Routes = [
  {
    key: "app.home",
    path: "/",
    component: lazy(() => import("@/views/Home")),
  },
];

export default appsRoute;
