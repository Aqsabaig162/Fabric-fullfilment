import { CustomModal1 } from "./modal1.style";
import { Button } from "antd";
type Props = {
  isModalOpen: boolean;
  handleOk: any;
  handleCancel: any;
  showsubModal: any;
};

export const Modal1 = (props: Props) => {
  const { isModalOpen, handleOk, handleCancel, showsubModal } = props;

  return (
    <CustomModal1
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="contentt">
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
            {" "}
            Resume this order{" "}
          </Button>
          <Button type="primary" className="btn2" onClick={handleCancel}>
            {" "}
            Close{" "}
          </Button>
        </div>
      </div>
    </CustomModal1>
  );
};
