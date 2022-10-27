import { Button, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { CustomTable } from "./tablestyle";
import { DataType, Tabledata } from "../../Data";
import { useState } from "react";
import { Modal } from "../../components/Modal/index";
import { LayoutTop } from "../../components/LayoutTop";
import { GrayBtn } from "../../components/FullWidthButton";
import { DownArrow } from "../../components/SiderRight/rightsidersvgs";
import { setshowsidebar } from "../../Redux/features/showsidebar/showsidebarslice";
import { useAppDispatch } from "../../Redux/store/hooks";
import { Filtersvg } from "./tablesvgs";
import { TableComponent } from "../../components/Table";

const Usertable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
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
    setIsSubModalOpen(true);
  };

  const handlesubOk = () => {
    setIsSubModalOpen(false);
  };

  const handlesubCancel = () => {
    setIsSubModalOpen(false);
  };

  console.log(dataa);

  const columnsData: ColumnsType<DataType> = [
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
                {ordersize}
              </span>
            </Tag>
          ) : (
            <Tag className="orderpending">
              <span
                onClick={() => {
                  showModal();
                }}
              >
                {ordersize}
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
        <Modal
          isModalOpen={isModalOpen}
          handleOk={() => setIsModalOpen(false)}
          handleCancel={() => setIsModalOpen(false)}
          width={350}
        >
          <>
            <h2>Do you want to resume?</h2>
            <p>This order was initiated by another associate.</p>
            <div className="btn">
              <Button
                type="default"
                onClick={() => {
                  handleCancel();
                  showsubModal();
                }}
                className="btn1"
              >
                Resume this order
              </Button>
              <Button type="primary" className="btn2" onClick={handleCancel}>
                Close
              </Button>
            </div>
          </>
        </Modal>

        <Modal
          isModalOpen={isSubModalOpen}
          handleOk={() => setIsSubModalOpen(false)}
          handleCancel={() => setIsSubModalOpen(false)}
          width={350}
        >
          <>
            <h2>Return to main screen</h2>
            <p>This order is in progress by another associate.</p>
            <div className="btn">
              <Button type="primary" className="btn2" onClick={handlesubCancel}>
                {" "}
                Return{" "}
              </Button>
            </div>
          </>
        </Modal>

        <TableComponent columns={columnsData} dataSource={dataa} />
      </div>
    </CustomTable>
  );
};

export default Usertable;
