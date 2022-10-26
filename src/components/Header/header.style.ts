import styled from "styled-components";
import { Layout, Input } from "antd";
const { Search } = Input;
const { Header } = Layout;

export const CustomHeader = styled(Header)`
  background: #4d4d57;

  h2 {
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
  }

  .buttonslayout {
    display: flex;
    align-items: center;
    gap: 10%;
  }
  .ant-input-search-button {
    border: none;
    color: Light grey;
  }
  .anticon-search {
    color: lightgrey;
  }
  .boldbtn {
    font-weight: 700;
  }

  Button {
    border-radius: 12px;
  }
`;

export const CustomSearch = styled(Search)`
  width: 70%;
  vertical-align: middle;
  border-radius: 12px;
`;
