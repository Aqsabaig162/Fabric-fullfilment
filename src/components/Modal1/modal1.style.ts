import styled from "styled-components";
import {  Modal } from 'antd';


export const CustomModal1 = styled( Modal )
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