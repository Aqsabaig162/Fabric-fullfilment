import { BellOutlined } from "@ant-design/icons";
import { Button, } from "antd";
import * as React from "react";
import { SideBar2 } from "../components/SiderRight/Sidebar";
import { CustomLayout, CustomContent } from "./tempstyle";
import { Row , Col } from 'antd';
import { Collapse } from 'antd';
import Header from "../components/Header";
import Siderleft from "../components/Siderleft";
import { useState}  from 'react';
import { DownArrow } from "../components/SiderRight/rightsidersvgs";





interface Props {
  children?: any;
}

const onChange = (key: string | string[]) => {
  console.log(key);
};

const Layoutfabric = (props: Props) => {
  const [sidebar, setsidebar] = useState(false)
  const { children } = props;

  return (
    <>
      <CustomLayout>
        <div> <Header title={"Fulfillment Fabric"} /> </div> 
     <div> <div className="mid"> <Button onClick={ () =>setsidebar(true) } >test</Button> <Siderleft /> 
         <CustomContent>
            <div className="top">
              <h1>Fulfillments</h1>
              <Button type="primary" className="orderbtn">
               
                <span className="gap">
                  
                  Orders <DownArrow />
                </span>
              </Button>
            </div>
             
            <div className="wrapper" >{children}</div>
          </CustomContent> 
         
     
        <SideBar2 show= {sidebar}  />
        </div>
        </div>    
        
        </CustomLayout>
      
    </>
  );
};

export default Layoutfabric;
