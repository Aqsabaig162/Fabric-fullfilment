import { Button } from "antd";
import React from "react";
import { Content } from "./itemsmodal.style";
interface Props {
  handleOnClick: () => void;
  handleCancel: () => void;
}

export const ItemsModalContent = (props: Props) => {
  const { handleOnClick, handleCancel } = props;

  return (
    <Content>
      <h2>Item Options</h2>
      <p>
        <ul className="unlist">
          <div
            className="selected"
            onClick={() => {
              handleOnClick();
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
    </Content>
  );
};
