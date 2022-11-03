import { SideBar2 } from "../components/SiderRight/Sidebar";
import { CustomLayout, CustomContent } from "./tempstyle";
import { Button, Collapse } from "antd";
import Header from "../components/Header";
import Siderleft from "../components/Siderleft";
import { useState } from "react";
import { useAppSelector } from "../Redux/store/hooks";
import showsidebarslice, {
  setshowsidebar,
} from "../Redux/features/showsidebar/showsidebarslice";

interface Props {
  children?:
    | React.ReactNode
    | React.ReactChild
    | React.ReactChild[]
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
}

const onChange = (key: string | string[]) => {
  console.log(key);
};

const Layoutfabric = (props: Props) => {
  const { showsidebar } = useAppSelector((state) => state.showsidebar);
  const { children } = props;

  return (
    <>
      <CustomLayout>
        <div>
          <Header title={"Fulfillment-Fabric"} />
        </div>
        <div>
          <div className="mid">
            <Siderleft />
            <CustomContent>{children}</CustomContent>
            {showsidebar ? <SideBar2 /> : ""}
          </div>
        </div>
      </CustomLayout>
    </>
  );
};

export default Layoutfabric;
