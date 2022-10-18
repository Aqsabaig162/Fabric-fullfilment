import styled from "styled-components";
import { Layout } from 'antd';
const {  Sider } = Layout;


export const SiderLeft = styled(Sider)
`
background: #FFFFFF;

.ant-menu-item-selected {
background: #F9F9F9 !important;
color: black;
weight: bolder;
}

.ant-menu{
    color: #B3B3BD !important ;
    padding-top: 20%;
    padding-left: 10px;
    padding-right: 10px;
    /* border-right: none; */
    border-radius: 12px;
    border: none;
}

.ant-menu-item-selected{
    border-radius: 12px;
    color: black;
    border-radius: 12px
}

.settings{
padding-bottom: 30%;
}
.ant-menu-item::after{
    border-right: none;
}

.ant-menu-item-icon {
    width: 25px;
    height: 25px;
}
.rowset{
    gap: 270px;
}

`