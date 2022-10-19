import { SideBar2 } from "../components/SiderRight/Sidebar";
import { CustomLayout, CustomContent } from "./tempstyle";
import { Button, Collapse } from 'antd';
import Header from "../components/Header";
import Siderleft from "../components/Siderleft";
import { useState}  from 'react';
import {  useAppSelector } from "../store/hooks";
import showsidebarslice, { setshowsidebar } from "../features/showsidebarslice";





interface Props {
  children?: any;
}

const onChange = (key: string | string[]) => {
  console.log(key);
};

const Layoutfabric = (props: Props) => {
 
  const { showsidebar } = useAppSelector((state) => state);
  const { children } = props;

  return (
    <>
      <CustomLayout>
    
        <div> <Header title={"Fulfillment Fabric"} /> </div> 
        <div> <div className="mid"> <Siderleft /> 
       
         <CustomContent>
            {children}
          </CustomContent> 
         
     { showsidebar ? <SideBar2 /> : ""}
        
     
        </div>
        </div>    
        
        </CustomLayout>
      
    </>
  );
};

export default Layoutfabric;

