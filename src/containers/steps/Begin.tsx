import { Button, RadioChangeEvent } from "antd";
import { useState } from "react";
import { GrayBtn } from "../../components/FullWidthButton";
import { LayoutTop } from "../../components/LayoutTop";
import { ThreeSteps } from "../../components/ThreeSteps";
import { Customsteps } from "./begin.style";
import { ParcelSize } from "../../Data/Data";
import { parcels } from "../../Data/Data";
import { TopLeftBtn, TopThreeDots } from "./beginsvgs";
import { Modal } from "../../components/Modal";
import { ProductsCard } from "../../components/PackItems";
import { ParcelModalContent } from "../../components/ModalContent/ParcelModal";
import { PackParcelsCard } from "../../components/PackParcels";
import { ItemsModalContent } from "../../components/ModalContent/ItemsModal";
import { ItemsSubModalContent } from "../../components/ModalContent/ItemsSubModal";

interface Props {}

export const Begin = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [isParcelsModalOpen, setisParcelsModalOpen] = useState(false);
  const [packageSize, setpackageSize] = useState(false);
  const [Clicked, setClicked] = useState(false);
  const [selectedValue, setselectedValue] = useState(1);
  const [selectedRadiodata, setselectedRadiodata] = useState<
    ParcelSize | undefined
  >();

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setselectedValue(e.target.value);

    const selectedBox = parcels?.filter((x) => x.value === e.target.value);
    setselectedRadiodata(selectedBox[0]);
  };

  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
        width={400}
      >
        <ItemsModalContent
          handleCancel={() => setIsModalOpen(false)}
          handleOnClick={() => {
            setIsModalOpen(false);
            setIsSubModalOpen(true);
          }}
        />
      </Modal>
      <Modal
        isModalOpen={isSubModalOpen}
        handleOk={() => setIsSubModalOpen(false)}
        handleCancel={() => setIsSubModalOpen(false)}
        width={400}
      >
        <ItemsSubModalContent
          handlesubCancel={() => setIsSubModalOpen(false)}
        />
      </Modal>

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
                isShow={() => setIsModalOpen(true)}
              />

              <Modal
                isModalOpen={isParcelsModalOpen}
                handleOk={() => setisParcelsModalOpen(false)}
                handleCancel={() => setisParcelsModalOpen(false)}
                width={450}
              >
                <ParcelModalContent
                  SelectedValue={selectedValue}
                  handleChange={(e) => onChange(e)}
                  handlebtnOnclick={() => {
                    setisParcelsModalOpen(false);
                    setpackageSize(true);
                  }}
                />
              </Modal>

              <PackParcelsCard
                isSelected={packageSize}
                selectedProduct={selectedRadiodata}
                isShow={() => setisParcelsModalOpen(true)}
              />
            </div>
          </div>
        </div>
        <GrayBtn />
      </Customsteps>
    </>
  );
};
