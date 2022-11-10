import { Button, message, Radio, RadioChangeEvent, Space, Steps } from "antd";
import React, { useState } from "react";
import { GrayBtn } from "../../components/FullWidthButton";
import { LayoutTop } from "../../components/LayoutTop";
import { ProductDetails } from "../../components/ProductDetails";
import { ThreeSteps } from "../../components/ThreeSteps";
import { CustomCard, Customsteps } from "./begin.style";
import { datadetails, ParcelSize } from "../../Data/Data";
import { parcels } from "../../Data/Data";
import { Menu } from "antd";

import {
  AddSymbol,
  Chips,
  RightTopBtn,
  Separateline,
  Threedots,
  TopLeftBtn,
  TopThreeDots,
  TwoThird,
} from "./beginsvgs";
import { Modal } from "../../components/Modal";
import { Completedpic, Completedpicsmall } from "../../Data/svgs";
import { useParams } from "react-router";
import { useAppSelector } from "../../Redux/store/hooks";
import { Parcelsize } from "../../components/ParcelSize";

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
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [Counter, setCounter] = useState(0);
  const [Clicked, setClicked] = useState(false);
  const [value, setValue] = useState(1);
  const [packageSize, setpackageSize] = useState(false);
  const [selectedValue, setselectedValue] = useState(1);
  const [selectedRadiodata, setselectedRadiodata] = useState<
    ParcelSize | undefined
  >();
  let { ordernumber } = useAppSelector((state) => state.ordernumber);
  let { orderId } = useParams();
  const selectedId = datadetails?.filter((x) => x.id === ordernumber);

  console.log(selectedId);

  const Sum = () => {
    return setCounter(Counter + 1);
  };

  const Subtract: any = () => {
    return setCounter(Counter - 1);
  };

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

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setselectedValue(e.target.value);

    const selectedBox = parcels?.filter((x) => x.value === e.target.value);
    setselectedRadiodata(selectedBox[0]);
  };

  console.log(selectedValue);
  console.log(selectedRadiodata);

  return (
    <>
      {/* <Modal
        isModalOpen={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
        width={400}
      >
        <h2>Item Options</h2>
        <p>
          <ul className="unlist">
            <div
              className="selected"
              onClick={() => {
                handleCancel();
                showsubModal();
              }}
            >
              <li>Manually pick</li>
            </div>
            <div className="notselected">
              <li>Product info</li>
            </div>
            <div className="notselected">
              <li>Scratch item</li>
            </div>
            <div className="notselected  scndlast ">
              <li>Update weight</li>
            </div>
            <div className="notselected   last">
              <li>Unpick item</li>
            </div>
          </ul>
        </p>
        <div className="btnitems">
          <Button type="primary" className="btn2" onClick={handleCancel}>
            Done
          </Button>
        </div>
      </Modal> */}
      {/* <Modal
        isModalOpen={isSubModalOpen}
        handleOk={() => setIsSubModalOpen(false)}
        handleCancel={() => setIsSubModalOpen(false)}
        width={400}
      >
        <h2>Manual Pick</h2>
        <div className="Modal4style">
          <p>
            <ProductDetails
              ProductPic={selectedId?.[0]?.imageSmall as JSX.Element}
              p1={"SKU: 1965322809631234"}
              p2={` Color:    ${selectedId?.[0]?.color}`}
              p3={" Size: 48 "}
              chips={<Chips />}
              inModal={true}
            />
          </p>
          <div className="counter">
            <div>
              <Button onClick={() => Subtract()} disabled={Counter <= 0}>
                -
              </Button>
            </div>
            <div>{Counter} </div>
            <div>
              <Button onClick={() => Sum()} disabled={Counter >= 3}>
                +
              </Button>
            </div>
          </div>
        </div>

        <div className="btnmanualpick">
          <Button type="primary" className="btn2 " onClick={handlesubCancel}>
            Done
          </Button>
        </div>
      </Modal> */}

      <Customsteps>
        <LayoutTop
          title={"PXGAI08942"}
          leftbutton={<TopLeftBtn />}
          rightbuttonsteps={
            <Button type="primary" className="topthreedots">
              <TopThreeDots />
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
                  {/* <Button type="primary" className="btn1">
                    <Threedots />
                  </Button> */}
                </div>
                <div className="products">
                  <span
                    onClick={() => {
                      setClicked(true);
                    }}
                  >
                    <p>
                      <ProductDetails
                        ProductPic={selectedId?.[0]?.imageSmall as JSX.Element}
                        p1={"SKU: 1965322809631234"}
                        p2={` Color:  ${selectedId?.[0]?.color}`}
                        p3={" Size: 48 "}
                        chips={Clicked ? <TwoThird /> : <Chips />}
                      />
                    </p>
                  </span>

                  <span
                    onClick={() => {
                      setClicked(true);
                    }}
                  >
                    {" "}
                    <p>
                      <ProductDetails
                        ProductPic={selectedId?.[0]?.imageSmall as JSX.Element}
                        p1={"SKU: 1965322809631234"}
                        p2={"Color: Navy Blue"}
                        p3={" Size: 48 "}
                        chips={Clicked ? <TwoThird /> : <Chips />}
                      />
                    </p>
                  </span>
                  <span
                    onClick={() => {
                      setClicked(true);
                    }}
                  >
                    {" "}
                    <p>
                      <ProductDetails
                        ProductPic={selectedId?.[0]?.imageSmall as JSX.Element}
                        p1={"SKU: 1965322809631234"}
                        p2={"Color: Navy Blue"}
                        p3={" Size: 48 "}
                        chips={Clicked ? <TwoThird /> : <Chips />}
                      />
                    </p>
                  </span>
                </div>
              </CustomCard>

              <Modal
                isModalOpen={isModalOpen}
                handleOk={() => setIsModalOpen(false)}
                handleCancel={() => setIsModalOpen(false)}
                width={450}
              >
                <h2>Parcel Size</h2>

                {/* <Parcelsize title={"Bag"} dimension={"12” x 10” x 8” "} />
                <Parcelsize title={"Bag"} dimension={"12” x 10” x 8” "} />
                <Parcelsize title={"Bag"} dimension={"12” x 10” x 8” "} /> */}

                <div className="parcel">
                  <Radio.Group onChange={onChange} value={selectedValue}>
                    <Space direction="vertical">
                      {parcels.map((ParcelData) => {
                        return (
                          <Radio value={ParcelData.value}>
                            <Parcelsize
                              title={ParcelData.title}
                              dimension={ParcelData.dimension}
                            ></Parcelsize>
                          </Radio>
                        );
                      })}
                    </Space>
                  </Radio.Group>

                  <Button
                    type="primary"
                    className="btn2 "
                    onClick={() => {
                      handleCancel();
                      setpackageSize(true);
                    }}
                  >
                    Select
                  </Button>
                </div>
              </Modal>

              <CustomCard style={{ width: 300 }}>
                <div className="align">
                  <h2>Parcels</h2>
                  <Button type="primary" className="btn1">
                    <AddSymbol />
                  </Button>
                </div>
                <div className="body">
                  {packageSize ? (
                    <>
                      <div className="parcelProduct">
                        <div>
                          <Button type="primary" className="btnparcelproduct">
                            <AddSymbol />
                          </Button>
                        </div>
                        <div>
                          <Parcelsize
                            title={selectedRadiodata?.title}
                            dimension={selectedRadiodata?.dimension}
                          />
                        </div>
                        <div>
                          <Threedots />
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}

                  <span className="span" onClick={() => showModal()}>
                    Complete pickup to start packing
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
