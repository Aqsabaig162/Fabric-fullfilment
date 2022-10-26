import { Button } from "antd";
import React from "react";
import { Wrapperdiv } from "./customtop.style";

interface Props {
  title: string;
  buttonn: string;
}

export const CustomTop = (props: Props) => {
  const { title } = props;
  const { buttonn } = props;

  return (
    <Wrapperdiv>
      <div className="top">
        <h1> {title} </h1>
        {buttonn}
      </div>
    </Wrapperdiv>
  );
};
