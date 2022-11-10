import { Radio } from "antd";

import { ParcelSize } from "./parcelSize.style";

interface Props {
  title?: string;
  dimension?: string;
}

export const Parcelsize = (props: Props) => {
  const { title, dimension } = props;
  return (
    <ParcelSize>
      <h4> {title}</h4>
      <p>{dimension}</p>
    </ParcelSize>
  );
};
