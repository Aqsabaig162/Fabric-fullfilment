import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Begin } from "../containers/steps/Begin";
import Table from "../containers/Table/Table";
import { ordernumberslice } from "../Redux/features/tabledata";
import { useAppSelector } from "../Redux/store/hooks";
import Layoutfabric from "../template/FabricLayout";

const publicRoutes = [
  {
    component: <Table />,
    path: "/",
  },
  {
    component: <Begin />,
    path: `/steps/:orderId`,
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
  let { ordernumber } = useAppSelector((state) => state.ordernumber);

  return <Routes>{renderpublicRoutes()}</Routes>;
};

const AppRouter = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default AppRouter;
