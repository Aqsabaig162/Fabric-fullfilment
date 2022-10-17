import styled from "styled-components";
import { Layout , Input } from 'antd';
const { Header , Sider , Content} = Layout;

const { Search } = Input;


 export const CustomLayout = styled(Layout)
`
min-height: 88vh;

`
export const CustomHeader = styled(Header)
`
background: #4D4D57;

h2{
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
}

.buttonslayout{
    display: flex;
    align-items: center;
    gap: 10%;
}
.ant-input-search-button{
    border:none;
    color: Light grey;
}
.anticon-search{
    color: lightgrey;
}
.boldbtn{
    font-weight: 700;
}

Button{
    border-radius: 12px;
}

`
export const CustomSider = styled(Sider)
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

.rowset{
    gap: 270px;
}

`
export const CustomContent = styled(Content)
`
background: #F9F9F9;

`
export const CustomSearch = styled(Search)
`
width: 70%;
vertical-align: middle;
border-radius: 12px;
`