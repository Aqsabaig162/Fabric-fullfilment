import { CustomModal3 } from "./modal3.style";
import { List } from "antd";
import { Button } from "antd";

type Props = {
  isModalOpen: boolean;
  handleOk: any;
  handleCancel: any;
  showsubModal: any;
};

export const Modal3 = (props: Props) => {
  const { isModalOpen, handleOk, handleCancel, showsubModal } = props;

  return (
    <CustomModal3
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="contentt">
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
              {" "}
              <li>Product info</li>
            </div>
            <div className="notselected">
              {" "}
              <li>Scratch item</li>{" "}
            </div>
            <div className="notselected  scndlast ">
              {" "}
              <li>Update weight</li>{" "}
            </div>
            <div className="notselected   last">
              {" "}
              <li>Unpick item</li>{" "}
            </div>
          </ul>
        </p>
        <div className="btn">
          <Button type="primary" className="btn2" onClick={handleCancel}>
            Done
          </Button>
        </div>
      </div>
    </CustomModal3>
  );
};
