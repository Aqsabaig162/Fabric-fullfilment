import React, { useState } from "react";
import { ParcelModalcontent } from "./parcelcontent.style";
import { Button, Radio, RadioChangeEvent, Space } from "antd";
import { parcels, ParcelSize } from "../../../Data/Data";
import { Parcelsize } from "../../ParcelSize";

type Props = {
  handleChange: (e: RadioChangeEvent) => void;
  SelectedValue: number;
};

export const ParcelModalContent = (props: Props) => {
  const { handleChange, SelectedValue } = props;

  return (
    <ParcelModalcontent>
      <Radio.Group onChange={handleChange} value={SelectedValue}>
        <Space direction="vertical">
          {parcels.map((ParcelData) => {
            return (
              <Radio value={ParcelData.value}>
                <Parcelsize
                  title={ParcelData.title}
                  dimension={ParcelData.dimension}
                ></Parcelsize>
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </ParcelModalcontent>
  );
};
