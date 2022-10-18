import styled from "styled-components";
import {  Layout } from 'antd';

const {  Sider } = Layout;

export const CustomSider = styled(Sider)
`

transition: transform 0.2s ; 

height: 100% !important;
.beginbtn {
    background: #6C5DD3;
    border: 2px solid #6C5DD3;
    border-radius: 16px;
    width: 235px;
    height: 42px;
}
padding: 15px;
h1{
    font-weight: 700;
    font-size: large;
}

h3{
    font-weight: 700;
}
.sidetop{
    padding-top: 15%;
}

.secondside >p {
    color: #B8B7B7;
    font-weight: 700;
}
.prodspan{
    display: flex;
}

.Pdata{
    display: flex;
    gap: 47px;

}
.beginbtn{

}

.Pdata >p {
    font-weight: 600;
    color: #808191;
}

.lists {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
}
.ulli{
    list-style: none;
    padding-left: 0px;
}
.ulli2{
    list-style: none;
    padding-right: 0px;
    font-weight: 500;
}
.imgsmall{
    padding-top: 5px;
    
}
.bigrect{
    width: 230px;
}
`
