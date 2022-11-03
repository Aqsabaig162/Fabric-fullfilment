import React from "react";
import smallrectangle from "../../images/smallrectangle.png";
import { VasChips } from "./prodsvgs";
import { Productstyle } from "./product.style";
interface Props {
  p1?: string;
  p2?: string;
  p3?: string;
  chips?: JSX.Element;
  inModal?: boolean;
  ProductPic?: JSX.Element;
}

export const ProductDetails = (props: Props) => {
  const { p1, p2, p3, chips, inModal, ProductPic } = props;
  return (
    <Productstyle>
      <div className={`stepsproduct ${inModal ? "" : "notModal"}`}>
        <h4>Pull-on Embellished Hem Ankle Jeggings</h4>
        <div className="stepprod1">
          <div>{ProductPic && ProductPic}</div>
          <div className="prodlist">
            <p> {p1} </p>
            <p> {p2} </p>
            <p> {p3} </p>
          </div>
          <div>
            <VasChips />
            {chips}
          </div>
        </div>
      </div>
    </Productstyle>
  );
};
