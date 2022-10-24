import { Button, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { CustomTable } from "./tablestyle";
import { DataType, Tabledata } from "../../Data";
import { useState } from "react";
import { Modal1 } from "../../components/Modal1/index";
import { Modal2 } from "../../components/Modal2";
import { LayoutTop } from "../../components/LayoutTop";
import { GrayBtn } from "../../components/GreyButton";
import { DownArrow } from "../../components/SiderRight/rightsidersvgs";
import { setshowsidebar } from "../../features/showsidebarslice";
import { useAppDispatch } from "../../store/hooks";
import { Filtersvg } from "./tablesvgs";

const Usertable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [issubModalOpen, setIssubModalOpen] = useState(false);
  const [dataa, setdataa] = useState<any>(Tabledata);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showsubModal = () => {
    setIssubModalOpen(true);
  };

  const handlesubOk = () => {
    setIssubModalOpen(false);
  };

  const handlesubCancel = () => {
    setIssubModalOpen(false);
  };

  console.log(dataa);

  const columns: ColumnsType<DataType> = [
    {
      title: "Order#",
      dataIndex: "order",
      key: "order",
      render: (text) => <a className="ordernum">{text}</a>,
    },
    {
      title: "Order size",
      dataIndex: "ordersize",
      key: "ordersize",
      render: (ordersize, record) => (
        <>
          {record.status == "completed" ? (
            <Tag className="ordersize">
              <span onClick={() => dispatch(setshowsidebar(true))}>
                {" "}
                {ordersize}{" "}
              </span>
            </Tag>
          ) : (
            <Tag className="orderpending">
              <span
                onClick={() => {
                  showModal();
                }}
              >
                {" "}
                {ordersize}{" "}
              </span>
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          <Tag>{tags}</Tag>
        </>
      ),
    },
    {
      title: "Shipping type",
      dataIndex: "shippingtype",
      key: "shippingtype",
    },
    {
      title: "Ship by",
      dataIndex: "shipby",
      key: "shipby",

      render: (shipby, record) => (
        <>
          {record.shipby == "Today" ? (
            <div className="today">{shipby}</div>
          ) : record.shipby == "Yesterday" ? (
            <div className="yesterday">{shipby}</div>
          ) : (
            <div className="date">{shipby}</div>
          )}
        </>
      ),
    },
  ];

  return (
    <CustomTable>
      <LayoutTop
        title={"Fulfillments"}
        rightbuttontable={
          <Button className="orderbtn">
            <h4>
              Orders <DownArrow />
            </h4>
          </Button>
        }
      />

      <div className="wrapper">
        <div className="filterdiv">
          {" "}
          <div>
            <h2>Orders</h2>
          </div>{" "}
          <Button type="primary" className="filterbtn">
            {" "}
            <Filtersvg />{" "}
          </Button>{" "}
        </div>
        <Modal1
          isModalOpen={isModalOpen}
          handleOk={() => setIsModalOpen(false)}
          handleCancel={() => setIsModalOpen(false)}
          showsubModal={() => setIssubModalOpen(true)}
        />
        <Modal2
          issubModalOpen={issubModalOpen}
          handlesubOk={() => setIssubModalOpen(false)}
          handlesubCancel={() => setIssubModalOpen(false)}
        />

        <Table columns={columns} dataSource={dataa} />
      </div>
    </CustomTable>
  );
};

export default Usertable;
