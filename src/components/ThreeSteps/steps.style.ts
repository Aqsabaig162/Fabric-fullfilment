import styled from "styled-components";


export const CustomThreeSteps = styled.div 
`
    display: flex;
    justify-content: center;
.ant-steps-item-title::after {

    display: none;
}

.ant-steps{
    padding-bottom: 50px;
    width: 60% !important;
}
.ant-steps-item-active .ant-steps-item-icon{
    background: #4FBF67;
    border-radius: 12px;
    width: 31.93px;
    height: 33.21px;
    border: #4FBF67;
}
.ant-steps-item-active  .ant-steps-icon{
    color: white;
    font-weight: 700;
}
.ant-steps-item-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ant-steps-item-active .ant-steps-item-title {
    color: #4FBF67   !important ;
    font-weight: 800;
}

.ant-steps-item-wait   .ant-steps-item-title{
    font-weight: 700;
}

.ant-steps-item-wait  .ant-steps-icon{
    color: white;
    font-weight: 700;
}
.ant-steps-item-icon{
    background: #D9D9D9;
    border-radius: 12px;
    width: 31.93px;
    height: 33.21px;
    color: #FFFFFF;
    border: #D9D9D9;

}

`