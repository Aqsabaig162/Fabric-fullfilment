import { Button, message, Steps } from "antd";
import React, { useState } from "react";
import { GrayBtn } from "../../components/GreyButton";
import { LayoutTop } from "../../components/LayoutTop";
import { ProductDetails } from "../../components/ProductDetails";
import { ThreeSteps } from "../../components/ThreeSteps";
import { CustomCard, Customsteps } from "./begin.style";
import { Modal3 } from "../../components/Modal3";

import {
  Chips,
  RightTopBtn,
  Separateline,
  Threedots,
  TopLeftBtn,
  TopThreeDots,
} from "./beginsvgs";
import { CustomModal4 } from "../../components/Modal4/modal4.style";
import { Modal4 } from "../../components/Modal4";

const { Step } = Steps;
const steps = [
  {
    title: "Pick",
    content: "First-content",
  },
  {
    title: "Pack",
    content: "Second-content",
  },
  {
    title: "Ship",
    content: "Last-content",
  },
];

interface Props {}

export const Begin = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [issubModalOpen, setIssubModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

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

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Modal3
        isModalOpen={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
        showsubModal={() => setIssubModalOpen(true)}
      />
      <Modal4
        issubModalOpen={issubModalOpen}
        handlesubOk={() => setIssubModalOpen(false)}
        handlesubCancel={() => setIssubModalOpen(false)}
      />
      <Customsteps>
        <LayoutTop
          title={"PXGAI08942"}
          leftbutton={<TopLeftBtn />}
          rightbuttonsteps={
            <Button type="primary" className="topthreedots">
              {" "}
              <TopThreeDots />{" "}
            </Button>
          }
        />

        <div className="wrapper">
          <div className="stepsdiv">
            <ThreeSteps />
            <span className="line">
              <Separateline />
            </span>
            <div className="card">
              <CustomCard style={{ width: 300 }}>
                <div className="align">
                  <h2>Items</h2>
                  <Button type="primary" className="btn1">
                    <Threedots />
                  </Button>
                </div>
                <div className="products">
                  <span
                    onClick={() => {
                      showModal();
                    }}
                  >
                    <p>
                      <ProductDetails
                        p1={"SKU: 1965322809631234"}
                        p2={"Color: Navy Blue"}
                        p3={" Size: 48 "}
                        chips={<Chips />}
                      />
                    </p>
                  </span>

                  <span
                    onClick={() => {
                      showModal();
                    }}
                  >
                    {" "}
                    <p>
                      <ProductDetails
                        p1={"SKU: 1965322809631234"}
                        p2={"Color: Navy Blue"}
                        p3={" Size: 48 "}
                        chips={<Chips />}
                      />
                    </p>
                  </span>
                  <span
                    onClick={() => {
                      showModal();
                    }}
                  >
                    {" "}
                    <p>
                      <ProductDetails
                        p1={"SKU: 1965322809631234"}
                        p2={"Color: Navy Blue"}
                        p3={" Size: 48 "}
                        chips={<Chips />}
                      />
                    </p>
                  </span>
                </div>
              </CustomCard>
            </div>
          </div>
        </div>
        <GrayBtn />
      </Customsteps>
    </>
  );
};
