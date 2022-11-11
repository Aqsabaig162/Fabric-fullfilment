import { Button, Radio, RadioChangeEvent, Space } from "antd";
import { useState } from "react";
import { GrayBtn } from "../../components/FullWidthButton";
import { LayoutTop } from "../../components/LayoutTop";

import { ThreeSteps } from "../../components/ThreeSteps";
import { CustomCard, Customsteps } from "./begin.style";
import { datadetails, ParcelSize } from "../../Data/Data";
import { parcels } from "../../Data/Data";

import { TopLeftBtn, TopThreeDots } from "./beginsvgs";
import { Modal } from "../../components/Modal";
import { Completedpic, Completedpicsmall } from "../../Data/svgs";
import { useParams } from "react-router";
import { useAppSelector } from "../../Redux/store/hooks";
import { Parcelsize } from "../../components/ParcelSize";
import { ProductsCard } from "../../components/PackItems";
import { ParcelModalContent } from "../../components/ModalContent/ParcelModal";
import { PackParcelsCard } from "../../components/PackParcels";

interface Props {}

export const Begin = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [Counter, setCounter] = useState(0);
  const [packageSize, setpackageSize] = useState(false);
  const [value, setValue] = useState(1);
  const [Clicked, setClicked] = useState(false);
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

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setselectedValue(e.target.value);

    const selectedBox = parcels?.filter((x) => x.value === e.target.value);
    setselectedRadiodata(selectedBox[0]);
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
            <div className="stepper">
              <ThreeSteps />
            </div>

            <div className="card">
              <ProductsCard
                setClickedValue={() => setClicked(true)}
                Clicked={Clicked}
              />

              <Modal
                isModalOpen={isModalOpen}
                handleOk={() => setIsModalOpen(false)}
                handleCancel={() => setIsModalOpen(false)}
                width={450}
              >
                <h2>Parcel Size</h2>
                <div className="parcel">
                  <ParcelModalContent
                    SelectedValue={selectedValue}
                    handleChange={(e) => onChange(e)}
                  />

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

              <PackParcelsCard
                isSelected={packageSize}
                selectedProduct={selectedRadiodata}
                isShow={() => showModal()}
              />
            </div>
          </div>
        </div>
        <GrayBtn />
      </Customsteps>
    </>
  );
};
