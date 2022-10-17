import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
  } from "react-router-dom";
import  Table   from '../containers/Table';
import Layoutfabric from '../template/FabricLayout';


  const publicRoutes = [
  
    {
      component: <Table /> ,
      path: "/",
    },
   
  ];


  const renderpublicRoutes = () => {
   
    return publicRoutes.map((item) => (
      <Route
        key={item.path}
        path={item.path}
        element={ <Layoutfabric> {item.component} </Layoutfabric> }
      />
    ));
  };


const AppRoutes = () => {

    return(
        <Routes>
            { renderpublicRoutes()}
        </Routes>
        
    )
}


const AppRouter = () => {
  return (
    <>
   <BrowserRouter>
   <AppRoutes />
   </BrowserRouter>
    </>
  )
}

export default AppRouter