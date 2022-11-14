import { Button } from "antd";
import React, { useState } from "react";
import { Chips } from "../../../containers/steps/beginsvgs";
import { datadetails } from "../../../Data/Data";
import { useAppSelector } from "../../../Redux/store/hooks";
import { ProductDetails } from "../../ProductDetails";
import { Content } from "./itemssubmodal.style";

interface Props {
  handlesubCancel: () => void;
}

export const ItemsSubModalContent = (props: Props) => {
  const { handlesubCancel } = props;
  let { ordernumber } = useAppSelector((state) => state.ordernumber);
  const selectedId = datadetails?.filter((x) => x.id === ordernumber);
  const [Counter, setCounter] = useState(0);

  const Sum = () => {
    return setCounter(Counter + 1);
  };

  const Subtract: any = () => {
    return setCounter(Counter - 1);
  };

  return (
    <Content>
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
    </Content>
  );
};
