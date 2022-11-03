import { CustomModal1 } from "./modal1.style";
type Props = {
  isModalOpen: boolean;
  handleOk: (value: React.SetStateAction<boolean>) => void;
  handleCancel: () => void;

  children:
    | React.ReactNode
    | React.ReactChild
    | React.ReactChild[]
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
  width?: string | number;
};

export const Modal = (props: Props) => {
  const { isModalOpen, handleOk, handleCancel, children, width } = props;

  return (
    <CustomModal1
      open={isModalOpen}
      onOk={() => handleOk}
      onCancel={() => handleCancel}
      footer={null}
      width={width}
    >
      <div className="contentt">{children}</div>
    </CustomModal1>
  );
};
