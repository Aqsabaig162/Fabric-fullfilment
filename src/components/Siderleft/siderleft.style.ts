import styled from "styled-components";
import { Layout } from "antd";
const { Sider } = Layout;

export const SiderLeft = styled(Sider)`
  background: #ffffff;

  .ant-menu-item-selected {
    background: #f9f9f9 !important;
    color: black;
    weight: bolder;
  }

  .ant-menu {
    color: #b3b3bd !important ;
    padding-top: 20%;
    padding-left: 10px;
    padding-right: 10px;
    /* border-right: none; */
    border-radius: 12px;
    border: none;
    display: flex;
    flex-direction: column;
    height: 83vh;
    li:nth-child(4) {
      margin-top: auto;
    }
  }

  .ant-menu-item-selected {
    border-radius: 12px;
    color: black;
    border-radius: 12px;
  }

  .settings {
    padding-bottom: 30%;
  }
  .ant-menu-item::after {
    border-right: none;
  }

  .ant-menu-item-icon {
    width: 25px;
    height: 25px;
  }
  .rowset {
    gap: 270px;
  }
`;
