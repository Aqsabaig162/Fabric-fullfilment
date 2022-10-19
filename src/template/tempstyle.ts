import styled from "styled-components";
import { Layout , Input } from 'antd';
const {  Content } = Layout;



export const CustomLayout = styled(Layout)
`

.wrapper{
    padding: 20px;
    background: white;
    border-radius: 25px;
}

display: block;
min-height: 100vh;
.ant-layout{
    flex-direction: column !important;
}
.ant-layout-has-sider{
    flex-direction: column !important;
}
.mid{
    display: flex;
}

`


export const CustomContent = styled(Content)
`
background: #F9F9F9;
padding: 30px;


h1{
    font-weight: 700;
    font-size: x-large;
}

.ant-table{
    border-radius: 24px;
}


`
