import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    SettingOutlined,
    UserOutlined,
    BellOutlined,
  } from '@ant-design/icons';
  import { Button, MenuProps } from 'antd';
import * as React from 'react';
import { CustomLayout , CustomHeader , CustomContent , CustomSider , CustomSearch, } from './tempstyle';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Row, Col } from "antd";
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const onSearch = (value: any) => console.log(value);
  const items: MenuItem[] = [
    getItem('Fulfillment', '1', <PieChartOutlined />),
    getItem('Transfers', '2', <DesktopOutlined />),
    getItem('Packet', '3', <FileOutlined />),
    getItem('Setting', '4', <SettingOutlined />),
  ];
 


  interface Props {
   
    children?: any,
  }


const Layoutfabric  = ( props: Props)  =>  {
  const { children } = props;


  return (
    <>
    

    <CustomLayout>
      
      <CustomHeader>
        <Row>
          <Col span={4} >    <h2>Fabric Fulfillment</h2> </Col>
             <Col span={18} ><CustomSearch
                  
                  placeholder=""
                  onSearch={onSearch}
                 
                />
                </Col>   
                <Col span={1} className = "buttonslayout" >
                <Button><BellOutlined /></Button>
                <Button className='boldbtn'>JJ</Button>
                </Col>
        </Row>
       
      </CustomHeader>
      
      <CustomLayout>
        <CustomSider>
        <Row className='rowset' >
         <Col > <div> <Menu theme="light"   defaultSelectedKeys={['1']} mode="inline" items={items} /></div></Col>
           
        </Row> 
        </CustomSider> 
        <CustomContent>{ children }</CustomContent>
      </CustomLayout>
     
    </CustomLayout>

    
    
  </>
  );
}

export default Layoutfabric;