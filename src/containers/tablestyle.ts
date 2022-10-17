import styled from "styled-components";
import {  Layout } from 'antd';
import { Space, Table, Tag  , Modal } from 'antd';
const {  Sider } = Layout;

export const CustomSider = styled(Sider)
`
padding-left: 10px;

h1{
    font-weight: 700;
}

h3{
    font-weight: 700;
}


`

export const CustomTable = styled.div
`
.ant-tag {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-weight: bold;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum', "tnum";
    display: inline-block;
    height: auto;
    margin-right: 8px;
    padding: 0 7px;
    font-size: 12px;
    /* line-height: 20px; */
    white-space: nowrap;
    /* background: #fafafa; */
    border: 3px solid #171717;
    border-radius: 10px;
    opacity: 1;
    transition: all 0.3s;
}
.ant-table-pagination {
    display: none;
    
}

.ordersize{
    color: white;
    width: 13%;
    background: black;
}
.ant-table-thead{
    background: white ;
}
a {
    color: #000000;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
    font-weight: bold;
    -webkit-text-decoration-skip: objects;
}

.orderpending{
    background: #FF9F38;
    border: none;
    color: white;
    height: 21px;
    cursor: pointer;
}

.today{
    color: #6C5DD3;
    font-weight: 600;
}

.yesterday{
    color: #F25252;
    font-weight: 600;
}
}
.date{
    color: #B3B3BD;
    font-weight: 600;
}

`
export const CustomModal = styled( Modal )
`
.ant-modal-content{
    overflow: auto;
    border-radius: 24px;
    width: 75%;
    height: 10%;
    display: flex;
    justify-content: center;
}
.contentt{
    padding-left: 20px;
    padding-top: 25px;

}

.contentt > p {
    display: flex;
    justify-content: center;
}

h2{
    display: flex;
    justify-content: center;
    font-weight: 700; 
}

.btn{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
}

.btn1{
    border: 2px solid #6C5DD3;
    border-radius: 13px;
    color: #6C5DD3;
    font-weight: 600;
    height: 40px;
}

.btn2{
    border: 2px solid #6C5DD3;
    border-radius: 13px;
    background-color: #6C5DD3;
    font-weight: 600;
    height: 40px;
}

`

export const CustomModal2 = styled(Modal)
`
.ant-modal-content{
    overflow: auto;
    border-radius: 24px;
    width: 75%;
    height: 10%;
    display: flex;
    justify-content: center;
}
.contentt{
    padding-left: 20px;
    padding-top: 25px;

}

.contentt > p {
    display: flex;
    justify-content: center;
}

h2{
    display: flex;
    justify-content: center;
    font-weight: 700; 
}

.btn{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
}

.btn1{
    border: 2px solid #6C5DD3;
    border-radius: 13px;
    color: #6C5DD3;
    font-weight: 600;
    height: 40px;
}

.btn2{
    border: 2px solid #6C5DD3;
    border-radius: 13px;
    background-color: #6C5DD3;
    font-weight: 600;
    height: 40px;
}


`