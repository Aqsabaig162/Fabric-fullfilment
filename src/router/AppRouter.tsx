import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Begin } from "../containers/steps/Begin";
import Table from "../containers/Table/Table";
import Layoutfabric from "../template/FabricLayout";

const publicRoutes = [
  {
    component: <Table />,
    path: "/",
  },
  {
    component: <Begin />,
    path: "/steps",
  },
];

const renderpublicRoutes = () => {
  return publicRoutes.map((item) => (
    <Route
      key={item.path}
      path={item.path}
      element={<Layoutfabric> {item.component} </Layoutfabric>}
    />
  ));
};

const AppRoutes = () => {
  return <Routes>{renderpublicRoutes()}</Routes>;
};

const AppRouter = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default AppRouter;
