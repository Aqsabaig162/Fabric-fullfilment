import React from "react";
import { Row, Col, MenuProps } from "antd";
import { Menu } from "antd";

import { SiderLeft } from "./siderleft.style";
import {
  FullfillComponent,
  Packedsvg,
  Settingssvg,
  Transfersicon,
} from "./leftsidersvgs";
interface Props {
  title?: string;
}

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  getItem("Fulfillment", "1", <FullfillComponent />),
  getItem("Transfers", "2", <Transfersicon />),
  getItem("Packet", "3", <Packedsvg />),
  getItem("Setting", "4", <Settingssvg />),
];
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

const Siderleft = (props: Props) => {
  return (
    <SiderLeft>
      <Row className="rowset">
        <Col>
          <div>
            <Menu
              theme="light"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </div>
        </Col>
      </Row>
    </SiderLeft>
  );
};

export default Siderleft;
