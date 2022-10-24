import { Button } from "antd";
import { useState } from "react";
import { Chips } from "../../containers/steps/beginsvgs";
import { ProductDetails } from "../ProductDetails";
import { CustomModal4 } from "./modal4.style";

interface Props {
  issubModalOpen: boolean;
  handlesubOk: any;
  handlesubCancel: any;
}

export const Modal4 = (props: Props) => {
  const { issubModalOpen, handlesubOk, handlesubCancel } = props;
  const [Counter, setCounter] = useState(0);

  const Sum = () => {
    return setCounter(Counter + 1);
  };

  const Subtract: any = () => {
    return setCounter(Counter - 1);
  };

  return (
    <CustomModal4
      open={issubModalOpen}
      onOk={handlesubOk}
      onCancel={handlesubCancel}
      footer={null}
    >
      <div className="contentt">
        <h2>Manual Pick</h2>
        <div className="Modal4style">
          <p>
            <ProductDetails
              p1={"SKU: 1965322809631234"}
              p2={"Color: Navy Blue"}
              p3={" Size: 48 "}
              chips={<Chips />}
              inModal={""}
            />
          </p>
          <div className="counter">
            <div>
              <Button onClick={() => Subtract()}>-</Button>
            </div>
            <div> {Counter} </div>
            <div>
              <Button onClick={() => Sum()}>+</Button>
            </div>
          </div>
        </div>

        <div className="btn">
          <Button type="primary" className="btn2" onClick={handlesubCancel}>
            Done
          </Button>
        </div>
      </div>
    </CustomModal4>
  );
};
