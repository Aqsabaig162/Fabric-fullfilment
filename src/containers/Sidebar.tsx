
import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { CustomSider } from './tablestyle';
import {
    PhoneOutlined,MailOutlined
  } from '@ant-design/icons';

export interface SideBarProps {
}

 const SideBar =  (props:  SideBarProps) => {
  return (
    <div style={{background: 'black', height: '100vh'  }}>
       <CustomSider width={250} className="site-layout-background" theme='light' style={{ height: '100vh'}} >
       <h1>Order Details</h1>

       <div>
        <h3>
        Jamie Jones
        </h3>
        <p>  <a><PhoneOutlined /></a> (456) 8929 1231</p>
        <p> <a><MailOutlined /></a> jamie.jones@domain.com</p>
        <p>  <a> <MailOutlined /></a>  500 7th Avenue, Manhatten, New York, NY, 10018</p>
       </div>
       <hr />

      </CustomSider>
    </div>
  );
}
export default SideBar;
